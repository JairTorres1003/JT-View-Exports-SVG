import * as t from '@babel/types'
import { camelCase } from 'lodash'

import { DefaultIconProperties } from '../config/DefaultIconProperties'
import { isEmpty } from '../misc'

import { getBinaryExpression } from './binaryExpression'
import { getLogicalExpression } from './logicalExpression'
import { getUnaryExpression } from './unaryExpression'

import { REST_PROPS_KEY } from '@/constants/misc'
import { type PropertyValue } from '@/interfaces/properties/propertyValues'

/**
 * Retrieves the property values based on the provided value and properties.
 * @param value - The value to retrieve the property values from.
 * @param properties - The properties object containing the values.
 * @returns The retrieved property values or undefined.
 */
export function getPropertyValues(
  value: PropertyValue,
  properties: Record<string, unknown>
): unknown | undefined {
  if (isEmpty(value)) {
    return
  }

  const config = new DefaultIconProperties()
  const defaultProps = config.getAllProperties()

  const restProps = (properties[REST_PROPS_KEY] ?? {}) as Record<string, unknown>
  let valueA: unknown | undefined
  let valueB: unknown | undefined
  let valueAny: boolean | Record<string, unknown> | unknown[] | string | undefined

  switch (value.type) {
    case 'BooleanLiteral':
    case 'NumericLiteral':
    case 'StringLiteral':
    case 'DecimalLiteral':
      return value.value
    case 'Identifier':
      return properties[value.name] ?? restProps[value.name] ?? defaultProps[value.name]
    case 'JSXExpressionContainer':
      return getPropertyValues(value.expression, properties)
    case 'AssignmentPattern':
      return getPropertyValues(value.right, properties)
    case 'UnaryExpression':
      return getUnaryExpression(value.operator, getPropertyValues(value.argument, properties))
    case 'BinaryExpression':
      valueA = getPropertyValues(value.left, properties)
      valueB = getPropertyValues(value.right, properties)

      return getBinaryExpression(value.operator, valueA, valueB)
    case 'LogicalExpression':
      valueA = getPropertyValues(value.left, properties)
      valueB = getPropertyValues(value.right, properties)

      return getLogicalExpression(value.operator, valueA, valueB)
    case 'ConditionalExpression':
      valueAny = getPropertyValues(value.test, properties) as boolean
      valueA = getPropertyValues(value.consequent, properties)
      valueB = getPropertyValues(value.alternate, properties)

      return valueAny ? valueA : valueB
    case 'ObjectExpression':
      valueAny = {}

      value.properties.forEach((property) => {
        const auxValue = valueAny as Record<string, unknown>
        if (t.isObjectProperty(property) && t.isIdentifier(property.key)) {
          const keyName = camelCase(property.key.name ?? '')
          valueAny = { ...auxValue, [keyName]: getPropertyValues(property.value, properties) }
        } else if (t.isSpreadElement(property)) {
          valueAny = { ...auxValue, ...(getPropertyValues(property.argument, properties) ?? {}) }
        }
      })

      return valueAny
    case 'ArrayExpression':
      valueAny = []

      value.elements.forEach((element) => {
        const auxValue = valueAny as unknown[]

        if (t.isSpreadElement(element)) {
          auxValue?.push(...((getPropertyValues(element.argument, properties) ?? []) as unknown[]))
        } else {
          auxValue?.push(getPropertyValues(element, properties))
        }

        valueAny = auxValue
      })

      return valueAny
    case 'TemplateLiteral':
      valueAny = ''

      value.quasis.forEach((quasi, index) => {
        valueAny = getBinaryExpression('+', valueAny, quasi.value.raw)

        if (index < value.expressions.length) {
          const valStr = getPropertyValues(value.expressions[index], properties)
          valueAny = getBinaryExpression('+', valueAny, valStr)
        }
      })

      return valueAny
    case 'MemberExpression':
      if (t.isIdentifier(value.property)) {
        const objectValue = getPropertyValues(value.object, properties)

        if (typeof objectValue === 'object' && !isEmpty(objectValue)) {
          const propertyName = value.property.name
          if (propertyName in objectValue) {
            return objectValue[propertyName as keyof typeof objectValue]
          }
        }
      }

      return undefined
    case 'NullLiteral':
      return null
    default:
      return undefined
  }
}

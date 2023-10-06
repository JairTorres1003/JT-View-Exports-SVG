import * as t from "@babel/types";
import { camelCase } from "lodash";

import { Value } from "../../interfaces/exportParser";
import { PropertyValuesResponse, Property } from "../../interfaces/propertyValues";
import { defaultProps } from "./defaultProps";

/**
 * Performs a unary expression operation based on the provided operator and given value.
 * @param operator The unary expression operator (e.g., "!", "-", "typeof").
 * @param value The value on which the operation will be applied.
 * @returns The result of the unary operation or undefined if the operator is not valid.
 */
function getUnaryExpression(operator: t.UnaryExpression["operator"], value: any) {
  try {
    switch (operator) {
      case "+":
        return +value;
      case "-":
        return -value;
      case "!":
        return !value;
      case "~":
        return ~value;
      case "typeof":
        return typeof value;
      default:
        return undefined;
    }
  } catch (error) {
    return undefined;
  }
}

/**
 * Performs a binary expression operation based on the provided operator and the given left and right operands.
 * @param operator The binary expression operator (e.g., "+", "*", "==").
 * @param left The left operand.
 * @param right The right operand.
 * @returns The result of the binary operation or undefined if the operator is not valid.
 */
function getBinaryExpression(operator: t.BinaryExpression["operator"], left: any, right: any) {
  try {
    switch (operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "/":
        return left / right;
      case "%":
        return left % right;
      case "*":
        return left * right;
      case "**":
        return left ** right;
      case "&":
        return left & right;
      case "|":
        return left | right;
      case ">>":
        return left >> right;
      case ">>>":
        return left >>> right;
      case "<<":
        return left << right;
      case "^":
        return left ^ right;
      case "==":
      case "===":
        return left === right;
      case "!=":
      case "!==":
        return left !== right;
      case "in":
        return left in right;
      case ">":
        return left > right;
      case "<":
        return left < right;
      case ">=":
        return left >= right;
      case "<=":
        return left <= right;
      default:
        return undefined;
    }
  } catch (error) {
    return undefined;
  }
}

/**
 * Performs a logical expression operation based on the provided operator and the given left and right operands.
 * @param operator The logical expression operator (e.g., "||", "&&", "??").
 * @param left The left operand.
 * @param right The right operand.
 * @returns The result of the logical operation or undefined if the operator is not valid.
 */
function getLogicalExpression(operator: t.LogicalExpression["operator"], left: any, right: any) {
  try {
    switch (operator) {
      case "||":
        return left || right;
      case "&&":
        return left && right;
      case "??":
        return left ?? right;
      default:
        break;
    }
  } catch (error) {
    return undefined;
  }
}

/**
 * Extracts property values from a given value node.
 * @param {Value} value - The value node to extract the property from.
 * @param {{ [key: string]: any }} properties - An object containing properties from the export type.
 * @returns {PropertyValuesResponse} The extracted property value, or undefined if the value node type is not recognized.
 */
export function getPropertyValues(
  value: Value,
  properties: { [key: string]: any }
): PropertyValuesResponse {
  if (!value) {
    return {};
  }

  let property: Property;

  switch (value.type) {
    case "NumericLiteral":
    case "BooleanLiteral":
    case "StringLiteral":
      return { value: value.value };
    case "Identifier":
      const keyIdentify = value.name;
      const initialValue = properties[keyIdentify] || defaultProps[keyIdentify];

      property = {
        initialValue,
        key: keyIdentify,
        nodeParams: keyIdentify,
        type: "CustomProperty",
      };

      return { value: initialValue, property };
    case "JSXExpressionContainer":
      return getPropertyValues(value.expression, properties);
    case "AssignmentPattern":
      return getPropertyValues(value.right, properties);
    case "UnaryExpression":
      const argument = getPropertyValues(value.argument, properties);

      return { value: getUnaryExpression(value.operator, argument.value) };
    case "BinaryExpression":
      const { value: left } = getPropertyValues(value.left, properties);
      const { value: right } = getPropertyValues(value.right, properties);

      return { value: getBinaryExpression(value.operator, left, right) };
    case "LogicalExpression":
      const { value: leftValue } = getPropertyValues(value.left, properties);
      const { value: rightValue } = getPropertyValues(value.right, properties);

      return { value: getLogicalExpression(value.operator, leftValue, rightValue) };
    case "ObjectExpression":
      let objectProps: { [key: string]: any } = {};
      let auxObjectProps: { [key: string]: any } = {};
      let expression: Property[] = [];

      value.properties.forEach((prop) => {
        let objProperty: Property | undefined;

        if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
          const propKey = camelCase(prop.key.name || "");
          const { value: objValue, property: objProp } = getPropertyValues(prop.value, properties);

          auxObjectProps[propKey] = objValue;
          objectProps[propKey] = objValue;
          objProperty = objProp;
        } else if (t.isSpreadElement(prop)) {
          const { value: objValue, property: objProp } = getPropertyValues(
            prop.argument,
            properties
          );

          objectProps = { ...objectProps, ...objValue };
          objProperty = { ...objProp, type: "SpreadElement" };
        }

        if (Object.keys(auxObjectProps).length > 0 && objProperty) {
          expression?.push({ type: "DefaultProperty", initialValue: auxObjectProps });
          auxObjectProps = {};
        }

        if (objProperty) {
          expression?.push(objProperty);
        }
      });

      if (Object.keys(auxObjectProps).length > 0 && expression.length > 0) {
        expression?.push({ type: "DefaultProperty", initialValue: auxObjectProps });
      }

      property = {
        expression: expression.length > 0 ? expression : undefined,
        type: "ObjectExpression",
      };

      return { value: objectProps, property };
    case "ArrayExpression":
      const arrayProps: any[] = [];

      value.elements.forEach((element) => {
        if (t.isSpreadElement(element)) {
          arrayProps.push(...getPropertyValues(element.argument, properties).value);
        } else {
          arrayProps.push(getPropertyValues(element, properties).value);
        }
      });

      return { value: arrayProps };
    case "TemplateLiteral":
      const templateString = value.quasis.reduce((acc, quasi, i) => {
        acc += quasi.value.raw;
        if (i < value.expressions.length) {
          acc += getPropertyValues(value.expressions[i], properties).value;
        }
        return acc;
      }, "");

      return { value: templateString };
    case "MemberExpression":
      if (t.isIdentifier(value.property)) {
        const { value: objVal, property: objProp } = getPropertyValues(value.object, properties);

        if (objVal && typeof objVal === "object") {
          const propertyName = value.property.name;

          if (propertyName in objVal) {
            const initialValue = objVal[propertyName];
            let nodeParams =
              [objProp?.nodeParams || [], propertyName].flat().join(".") || undefined;

            property = {
              ...objProp,
              initialValue,
              nodeParams,
              key: propertyName,
            };

            return { value: initialValue, property };
          }
        }
      }
      return {};
    case "ConditionalExpression":
      const { value: conditionValue } = getPropertyValues(value.test, properties);
      const { value: trueValue } = getPropertyValues(value.consequent, properties);
      const { value: falseValue } = getPropertyValues(value.alternate, properties);
      return { value: conditionValue ? trueValue : falseValue };
    default:
      return {};
  }
}

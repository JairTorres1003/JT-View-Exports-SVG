import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/table'
import React, { ComponentProps, useId, useMemo } from 'react'

import { getChildrenByType } from '@site/src/lib/react-childrens'
import { cn } from '@site/src/lib/utils'

const MDXTable: React.FC<ComponentProps<'table'>> = ({ children, className }) => {
  const id = useId()

  const columns = useMemo(() => {
    const childrenList = getChildrenByType<'th'>(getChildrenByType(children, 'thead'), 'tr')
    return React.Children.map(childrenList, (child, index) => ({ child, key: index }))
  }, [children])

  const rows = useMemo(() => {
    const childrenList = getChildrenByType<'tr'>(children, 'tbody')
    return React.Children.map(childrenList, (child, index) => ({
      child: child.props.children as Array<React.ReactElement<ComponentProps<'td'>>>,
      key: index,
    }))
  }, [children])

  return (
    <Table className={cn('mt-4 w-fit', className)} aria-label={`Table-${id}`} id={id}>
      <TableHeader columns={columns}>
        {(columns) => <TableColumn key={columns.key}>{columns.child.props.children}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => {
              const cell = Array.isArray(item.child) ? item.child[columnKey] : null

              return <TableCell key={`${item.key}-${columnKey}`}>{cell?.props?.children}</TableCell>
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default MDXTable

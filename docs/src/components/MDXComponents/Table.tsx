import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/table'
import React, { useId } from 'react'

import { cn } from '@site/src/lib/utils'
import { Cell, Row } from '@site/src/plugins/remark/table/types'
import { renderHast } from '@site/src/lib/render-hast'

interface MDXTableProps {
  className?: string
  columns: Cell[]
  rows: Row[]
}

const MDXTable: React.FC<MDXTableProps> = ({ className, columns, rows }) => {
  const id = useId()

  return (
    <Table className={cn('mt-4 w-fit', className)} aria-label={`Table-${id}`} id={id}>
      <TableHeader columns={columns}>
        {({ children, ...columns }) => (
          <TableColumn {...columns} key={columns.key}>
            {renderHast(children)}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => {
              const { children, ...cell }: Cell = getKeyValue(item, columnKey)

              return (
                <TableCell {...cell} key={cell.key}>
                  {renderHast(children || [])}
                </TableCell>
              )
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default MDXTable

import { Table } from '@heroui/react'
import { renderHast } from '@site/src/lib/render-hast'
import { cn } from '@site/src/lib/utils'
import type { Cell, Row } from '@site/src/plugins/remark/table/types'
import { useId } from 'react'

interface MDXTableProps {
  className?: string
  columns: Cell[]
  rows: Row[]
}

function getKeyValue(item: Row, key: Cell['key']): Cell {
  const cell = item[key]

  if (!cell) {
    throw new Error(`Cell with key "${key}" not found in row "${item.key}"`)
  }

  return cell
}

const MDXTable: React.FC<MDXTableProps> = ({ className, columns, rows }) => {
  const id = useId()

  return (
    <Table
      id={id}
      variant='secondary'
      aria-label={`Table-${id}`}
      className={cn(
        'mt-4 w-fit max-w-full p-0 shadow-sm rounded-lg border border-accent/20',
        className
      )}
    >
      <Table.ScrollContainer>
        <Table.Content
          aria-label={`TableContent-${id}`}
          className='w-fit max-w-full p-4 bg-surface'
        >
          <Table.Header>
            {columns.map(({ children, ...column }, index) => (
              <Table.Column
                {...column}
                isRowHeader
                key={column.key}
                className={cn(
                  'dark:bg-background bg-accent/20 min-h-[40px] h-[40px] text-foreground after:bg-transparent',
                  {
                    'rounded-l-md': index === 0,
                    'rounded-r-md': index === columns.length - 1,
                  }
                )}
              >
                {renderHast(children || [])}
              </Table.Column>
            ))}
          </Table.Header>

          <Table.Body>
            {rows.map((item) => (
              <Table.Row key={item.key}>
                {columns.map((column) => {
                  const { children, ...cell } = getKeyValue(item, column.key)

                  return (
                    <Table.Cell {...cell} key={cell.key} className='px-4 py-2 border-none'>
                      {renderHast(children || [])}
                    </Table.Cell>
                  )
                })}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  )
}

export default MDXTable

import { useContext, useMemo } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { HistoryContainer, HistoryList, Status } from './styles'

import { CycleContext } from '../../contexts/CyclesContext'
import { ICycle } from '../../reducers/cycles/reducer'

const STATUS = {
  done: 'Concluído',
  in_progress: 'Em andamento',
  stopped: 'Interrompido',
} as const

export function History() {
  const { cycles } = useContext(CycleContext)

  const columns = useMemo<ColumnDef<ICycle>[]>(
    () => [
      {
        header: 'Tarefa',
        accessorKey: 'task',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Duração',
        accessorKey: 'minutesAmount',
        cell: (info) => <span>{info.getValue<number>()} minutos</span>,
      },
      {
        header: 'Início',
        accessorKey: 'startDate',
        cell: (info) => (
          <span>
            {formatDistanceToNow(info.getValue<Date>(), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        ),
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (info) => (
          <Status status={info.getValue<keyof typeof STATUS>()}>
            {STATUS[info.getValue<keyof typeof STATUS>()]}
          </Status>
        ),
      },
    ],
    [],
  )

  const table = useReactTable({
    columns,
    data: cycles,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  })

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}

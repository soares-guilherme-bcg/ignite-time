import { useMemo } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type Task = {
  id: number
  task: string
  duration: number
  start: string
  status: string
}

const tasks: Task[] = [
  {
    id: 1,
    task: 'tarefa',
    duration: 25,
    start: '2023-01-10T10:00:00',
    status: 'done',
  },
  {
    id: 2,
    task: 'tarefa',
    duration: 20,
    start: '2023-01-11T10:00:00',
    status: 'in_progress',
  },
  {
    id: 3,
    task: 'tarefa',
    duration: 20,
    start: '2023-01-11T10:00:00',
    status: 'stopped',
  },
]

const STATUS = {
  done: 'Concluído',
  in_progress: 'Em andamento',
  stopped: 'Interrompido',
} as const

export function History() {
  const columns = useMemo<ColumnDef<Task>[]>(
    () => [
      {
        header: 'Tarefa',
        accessorKey: 'task',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Duração',
        accessorKey: 'duration',
        cell: (info) => <span>{info.getValue<number>()} minutos</span>,
      },
      {
        header: 'Início',
        accessorKey: 'start',
        cell: (info) => info.getValue(),
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
    data: tasks,
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

"use client"
import React, { useState } from 'react'
import { DateTime } from 'luxon'
import { useMemo } from 'react'
// import assetsdb from '../../data/trucks.json'
import db from '../../data/db.json'
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from '@tanstack/react-table'
const assetsdb = db.assets
  
export default function BasicTable() {
  const selected = []
    
  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')
  const [selectedItems, setSelectedItems] = useState("")

  const data = useMemo(() => assetsdb, [])

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
        Header: 'ID',
        accessorKey: 'asset_id'
    },
    {
        Header: 'REG',
        accessorKey: 'registration'
    },
    {
        Header: 'TYPE',
        accessorKey: 'type'
    },
    {
        Header: 'FUEL CAPACITY',
        accessorKey: 'fuel_capacity'
    },
    {
        Header: 'COLOR',
        accessorKey: 'color'
    }
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  })
  function handleClick(obj){
    selected.push(obj)
    // setSelectedItems(obj.TRACTOR)
  }  
  return (
    <div className='my-3'>
      <div className='mb-3 text-center text-danger bg-warning rounded-3'>
        <p>
          {`${selectedItems}` || `${selected}`}
        </p>
      </div>
      <input
        type='text'
        value={filtering}
        onChange={e => setFiltering(e.target.value)}
        placeholder='Search all assets'
        className='input rounded-2 p-2 form-control w-90'
      />
      <table className='table table-striped fs-6'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {
                        { asc: '🔼', desc: '🔽' }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className=''>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} onClick={handleClick(row.original)}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
      <div>
        <button onClick={() => table.setPageIndex(0)}>First page</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next page
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last page
        </button>
      </div>
    </div>
  )
}
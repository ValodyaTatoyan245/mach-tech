import React from "react";
import { useTable } from "react-table";

const Table = ({ data, columns, handleRowClick }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-full ">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="bg-[#f2f2f2] py-5">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              onClick={() => handleRowClick(row)}
              className={`${
                Number(row.original.id) % 2 === 0
                  ? "bg-[#E8F0FF]"
                  : "bg-[#EDEDED]"
              }`}
            >
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} style={{ padding: "0.5rem" }}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

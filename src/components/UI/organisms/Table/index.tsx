/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

import * as S from "./styles";

type TableProps<T> = {
  columns: ColumnDef<T>[];
  data: T[];
};

const falbackData: [] = [];

export const Table = <T,>({ columns, data }: TableProps<T>) => {
  const { getHeaderGroups, getRowModel, getFooterGroups } = useReactTable({
    data: data ?? falbackData,
    columns: useMemo(() => columns, [columns]),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <S.Table>
      <S.Header>
        {getHeaderGroups().map((headerGroup) => (
          <S.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <S.HeaderCell key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </S.HeaderCell>
            ))}
          </S.Row>
        ))}
      </S.Header>

      <S.Body>
        {getRowModel().rows.map((row) => (
          <S.Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <S.Cell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </S.Cell>
            ))}
          </S.Row>
        ))}
      </S.Body>

      <S.Footer>
        {getFooterGroups().map((footerGroup) => (
          <S.Row key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <S.HeaderCell key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </S.HeaderCell>
            ))}
          </S.Row>
        ))}
      </S.Footer>
    </S.Table>
  );
};

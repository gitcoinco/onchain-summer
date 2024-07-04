import clsx from "clsx";
import { Cell } from "./Cell";
import { Column } from "./types";

interface RowProps<T> {
  index: number;
  rowData: T;
  columns: Array<Column<T>>;
}

export function Row<T extends Record<string, any>>({
  index,
  rowData,
  columns,
}: RowProps<T>) {
  const oddRow = index % 2 !== 0;
  return (
    <tr key={index} className={clsx("h-[55px]", { "bg-white-40": oddRow })}>
      {columns.map((column, index) => (
        <Cell
          key={column.key as string}
          index={index}
          nColumns={columns.length}
          value={rowData[column.key]}
          type={column.type}
        />
      ))}
    </tr>
  );
}

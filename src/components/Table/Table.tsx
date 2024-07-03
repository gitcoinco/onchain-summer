import { useMemo, useState } from "react";
import { Column } from "./types";
import { HeadRow } from "./HeadRow";
import { Row } from "./Row";

type SortDirection = "ascending" | "descending";

interface TableProps<T> {
  data: Array<T>;
  columns: Array<Column<T>>;
}

export function Table<T extends Record<string, any>>({
  data,
  columns,
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: SortDirection;
  }>({ key: null, direction: "ascending" });

  const sortedData = useMemo(() => {
    const items = [...data];
    const { key: sortKey, direction } = sortConfig;
    if (sortKey !== null) {
      items.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return direction === "ascending" ? -1 : 1;
        }
        if (a[sortKey] > b[sortKey]) {
          return direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return items;
  }, [data, sortConfig]);

  function handleSort(key: keyof T) {
    let direction: SortDirection = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  }

  return (
    <table className="w-full table-fixed">
      <thead>
        <HeadRow columns={columns} handleSort={handleSort} />
      </thead>
      <div className="h-4 w-full" />
      <tbody>
        {sortedData.map((item, index) => (
          <Row index={index} rowData={item} columns={columns} />
        ))}
      </tbody>
    </table>
  );
}

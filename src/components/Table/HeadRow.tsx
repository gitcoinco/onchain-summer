import clsx from "clsx";
import sortIcon from "@/assets/sortIcon.svg";
import { Column } from "./types";

interface HeadRowProps<T> {
  columns: Array<Column<T>>;
  handleSort: (key: keyof T) => void;
}

export function HeadRow<T extends Record<string, any>>({
  columns,
  handleSort,
}: HeadRowProps<T>) {
  return (
    <tr className="h-[55px] bg-white-50">
      {columns.map(({ key, label, sort }, index) => {
        const firstCell = index === 0;
        const lastCell = index === columns.length - 1;

        return (
          <th
            key={key as string}
            onClick={sort ? () => handleSort(key) : undefined}
            className={clsx({
              "rounded-l-xl pl-4": firstCell,
              "rounded-r-xl pr-4": lastCell,
            })}
            colSpan={firstCell || lastCell ? 2 : 1}
          >
            <div
              className={clsx("flex items-center w-full gap-2", {
                "justify-start": firstCell,
                "justify-end": lastCell,
                "justify-center": !firstCell && !lastCell,
                "cursor-pointer": sort === true,
              })}
            >
              <p className="font-medium text-2xl/10">{label}</p>
              {sort && (
                <img src={sortIcon} alt="Sort Icon" className="size-5" />
              )}
            </div>
          </th>
        );
      })}
    </tr>
  );
}

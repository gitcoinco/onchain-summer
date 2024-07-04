import clsx from "clsx";
import { Badge } from "./Badge";
import { ColumnType } from "./types";

interface CellProps {
  index: number;
  nColumns: number;
  value: any;
  type?: ColumnType;
}

export function Cell({ index, nColumns, value, type = "text" }: CellProps) {
  const firstCell = index === 0;
  const lastCell = index === nColumns - 1;
  return (
    <td
      className={clsx("whitespace-nowrap overflow-hidden", {
        "rounded-l-2xl pl-4": firstCell,
        "rounded-r-2xl pr-9": lastCell,
      })}
      colSpan={firstCell || lastCell ? 2 : 1}
    >
      <div
        className={clsx("flex items-center", {
          "justify-start": firstCell,
          "justify-end": lastCell,
          "justify-center": !firstCell && !lastCell,
        })}
        style={{ width: "100%" }}
      >
        {firstCell && type !== "badge" && <CircleIcon />}
        {type === "badge" ? (
          <Badge value={value} />
        ) : (
          <p className="font-normal text-lg/10 overflow-hidden text-ellipsis whitespace-nowrap">
            {value}
          </p>
        )}
      </div>
    </td>
  );
}

const CircleIcon = () => (
  <i className="inline-block size-6 shrink-0 rounded-full bg-gray-light border border-white mr-2" />
);

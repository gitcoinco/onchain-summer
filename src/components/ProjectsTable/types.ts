export type ColumnType = "text" | "badge";

export interface Column<T> {
  key: keyof T;
  label: string | JSX.Element;
  sort?: boolean;
  type?: ColumnType;
}

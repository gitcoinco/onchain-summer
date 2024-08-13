import clsx from "clsx";
import sortIcon from "@/assets/sortIcon.svg";
import sortIconAsc from "@/assets/sortIconAsc.svg";
import sortIconDesc from "@/assets/sortIconDesc.svg";
import { SortConfig, useProjectsContext } from "@/contexts/projectsContext";
import { getDisplayName, getMetrics, metricMap } from "@/services/metrics";

const SortIcon = ({
  field,
  sortConfig,
}: {
  field: string;
  sortConfig: SortConfig;
}) => {
  if (field !== sortConfig.key) {
    return <img src={sortIcon} alt="Sort Icon" className="size-5" />;
  } else {
    return (
      <img
        src={sortConfig.direction === "ascending" ? sortIconAsc : sortIconDesc}
        alt="Sort Icon"
        className="size-5"
      />
    );
  }
};

export function ProjectsTableHeadRow() {
  const { handleSort, sortConfig } = useProjectsContext();

  return (
    
    <tr className="h-[55px] bg-white-50">
      <th
        className="pl-4 rounded-l-xl"
        colSpan={2}
        onClick={() => handleSort("name")}
      >


        <div className="flex items-center cursor-pointer">
          <span
            className="pr-2 text-2xl font-medium truncate"
            title={"Project Name"}
          >
            Project Name
          </span>

          <SortIcon field="name" sortConfig={sortConfig} />
        </div>
      </th>


      {getMetrics().map((metric, index) => (
        <th
          key={index}
          className="pl-2"
          onClick={() => handleSort(`metrics.${metric}`)}>
          <div
            className="flex items-center px-12 align-text-top cursor-pointer text-1xl ">
            {getDisplayName(metric)}
            <SortIcon field={`metrics.${metric}`} sortConfig={sortConfig} />
          </div>
        </th>
      ))}
      
      <th
        className="pl-2 pr-4 rounded-r-xl"
        colSpan={2}
        onClick={() => handleSort("status")}
      >
        <div
          className={clsx(
            "flex items-center justify-end gap",
            "w-full",
            "cursor-pointer"
          )}
        >
          <span className="font-medium truncate text-2xl/10" title={"Status"}>
            {"Status"}
          </span>
          <SortIcon field="status" sortConfig={sortConfig} />
        </div>
      </th>
    </tr>

  );
}

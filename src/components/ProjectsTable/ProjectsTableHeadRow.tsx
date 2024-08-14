import sortIcon from "@/assets/sortIcon.svg";
import sortIconAsc from "@/assets/sortIconAsc.svg";
import sortIconDesc from "@/assets/sortIconDesc.svg";
import { SortConfig, useProjectsContext } from "@/contexts/projectsContext";
import { getDisplayName, getMetrics } from "@/services/metrics";

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

    <thead className="text-xl ">
      
      <tr >
        <th scope="col" className="sticky left-0 px-6 py-3 rounded-l-3xl bg-transparent-sunset" onClick={() => handleSort("name")}>
          <div className="flex items-center">
            Project Name
            <SortIcon field="name" sortConfig={sortConfig} />
          </div>
        </th>
        {getMetrics().map((metric, index) => (
          <th
            key={index}
            scope="col"
            className="px-12 bg-transparent-sunset text-nowrap"
            onClick={() => handleSort(`metrics.${metric}`)}>
            <div
              className="flex items-center">
              {getDisplayName(metric)}
              <SortIcon field={`metrics.${metric}`} sortConfig={sortConfig} />
            </div>
          </th>
        ))}

        <th className="pl-2 rounded-r-3xl bg-transparent-sunset"
          onClick={() => handleSort(`status`)}>
          <div
            className="flex items-center px-12 align-text-top cursor-pointer text-1xl ">
            status
            <SortIcon field={`status`} sortConfig={sortConfig} />
          </div>
        </th>
      </tr>
    </thead>
  );
}

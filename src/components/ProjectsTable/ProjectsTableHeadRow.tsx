import sortIcon from "../../images/sortIcon.svg";
import sortIconAsc from "../../images/sortIconAsc.svg";
import sortIconDesc from "../../images/sortIconDesc.svg";
import { SortConfig, useProjectsContext } from "../../contexts/projectsContext";
import {
  getDescription,
  getDisplayName,
  getMetrics,
} from "../../services/metrics";
import Image from "next/image";
import IconWithTooltip from "../IconWithTooltip";

const SortIcon = ({
  field,
  sortConfig,
}: {
  field: string;
  sortConfig: SortConfig;
}) => {
  if (field !== sortConfig.key) {
    return <Image src={sortIcon} alt="Sort Icon" className="ml-1 size-3" />;
  } else {
    return (
      <Image
        src={sortConfig.direction === "ascending" ? sortIconAsc : sortIconDesc}
        alt="Sort Icon"
        className="ml-1 size-3"
      />
    );
  }
};

type Props = {
  metricType: number;
};

export function ProjectsTableHeadRow(props: Props) {
  const { handleSort, sortConfig } = useProjectsContext();

  return (
    <thead className="text-xs text-header-title">
      <tr>
        <th
          scope="col"
          className="px-6 py-3  md:pr-44 md:left-0 md:sticky"
          onClick={() => handleSort("name")}>
          <div className="flex items-center text-sm text-nowrap">
            Project Name
            <SortIcon field="name" sortConfig={sortConfig} />
            {/* {props.metricType === APP_METRICS_TYPE ? (
              <SortIcon field="name" sortConfig={sortConfig} />
            ) : (
              <SortIcon field="metadata.name" sortConfig={sortConfig} />
            )} */}
          </div>
        </th>
        {getMetrics(props.metricType).map((metric, index) => (
          <th key={index} scope="col" className="px-12 text-nowrap">
            <div className="flex items-center">
              <div className="" onClick={() => handleSort(`metrics.${metric}`)}>
                {getDisplayName(metric)}
              </div>
              <div
                className="min-w-4"
                onClick={() => handleSort(`metrics.${metric}`)}>
                <SortIcon field={`metrics.${metric}`} sortConfig={sortConfig} />
              </div>
              <div className="pt-1 ml-2">
                <IconWithTooltip text={getDescription(metric)} />
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

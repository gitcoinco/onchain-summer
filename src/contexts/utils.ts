import { ProjectWithRank } from "@/services/ezrfApi/types";

export const sortProjects = (
  projects: ProjectWithRank[] | undefined,
  sortConfig: {
    key: string;
    direction: "ascending" | "descending";
  }
) => {
  if (!projects) return [];

  return [...projects].sort((a, b) => {
    if (sortConfig.key) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let aValue: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let bValue: any;

      if (sortConfig.key.startsWith("metrics.")) {
        const metricKey = sortConfig.key.replace("metrics.", "");
        aValue = a.metrics?.[metricKey];
        bValue = b.metrics?.[metricKey];
      } else {
        aValue = a[sortConfig.key as keyof ProjectWithRank];
        bValue = b[sortConfig.key as keyof ProjectWithRank];
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortConfig.direction === "ascending"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === "ascending"
          ? aValue - bValue
          : bValue - aValue;
      }

      if (typeof aValue === "number" || typeof bValue === "number") {
        if (!aValue) return sortConfig.direction === "ascending" ? 1 : -1;
        if (!bValue) return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });
};

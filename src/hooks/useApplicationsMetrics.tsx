import { useQuery } from "@tanstack/react-query";
import { fetchApplications } from "@/services/ezrfApi";
import { ProjectWithRank } from "@/services/ezrfApi/types";

export function useApplicationsMetrics() {
  return useQuery<ProjectWithRank[], Error>({
    queryKey: ["metrics"],
    queryFn: fetchApplications,
  });
}

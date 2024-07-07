import { useQuery } from "@tanstack/react-query";
import { fetchMetrics } from "@/services/ezrfApi";
import { ProjectWithMetrics } from "@/services/ezrfApi/types";

export function useApplicationsMetrics() {
  return useQuery<ProjectWithMetrics[], Error>({
    queryKey: ["metrics"],
    queryFn: fetchMetrics,
  });
}

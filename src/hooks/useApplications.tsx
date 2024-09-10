import { useQuery } from "@tanstack/react-query";
import { fetchApplications } from "@/services/ezrfApi";

export function useApplications() {
  const query = useQuery({
    queryKey: ["metrics"],
    queryFn: () => fetchApplications(),
  });

  return query;
}

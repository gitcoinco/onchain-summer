import { useQuery } from "@tanstack/react-query";
import { Application, fetchApplications } from "@/services/ezrfApi";

export function useApplications() {
  return useQuery<Application[], Error>({
    queryKey: ["applications"],
    queryFn: fetchApplications,
  });
}

import { useQuery } from "@tanstack/react-query";
import { fetchApplications } from "../services/ezrfApi";

export function useApplications() {
  const query = useQuery({
    queryKey: ["metrics"],
    queryFn: () => fetchApplications(),
  });

  return query;
}



// export function useApplications() {
//   const query = useInfiniteQuery({
//     queryKey: ["metrics"],
//     queryFn: ({ pageParam }: { pageParam: number }) => fetchApplications(pageParam),
//     initialPageParam: 1,
//     getNextPageParam: (lastPage: ProjectWithMetrics[]) => {
//       return lastPage[lastPage.length - 1].nextPage
//     },
//     maxPages: 7,
//   });

//   return query;
// }

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchApplications } from "@/services/ezrfApi";

export function useInfiniteApplications() {

  const query = useInfiniteQuery({

    queryKey: ["metrics"],
    queryFn: ({ pageParam }) => fetchApplications(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage[lastPage.length - 1].nextPage
    },
    maxPages: 7,
  });

  return query;

}

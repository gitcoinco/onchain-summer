import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchApplications } from "@/services/ezrfApi";
import { ProjectWithRank } from "@/services/ezrfApi/types";



// const fetchProjects = async ({ pageParam = 0 }) => {
//   const res = await fetch('/api/projects?cursor=' + pageParam)
//   return res.json()
// }


// 14 pages of 100
// export function useApplicationsMetrics(page : number)  {
//   return useQuery<ProjectWithRank[], Error>({
//     queryKey: ["metrics", page],
//     queryFn: () => {return fetchApplications({pageParam: page});}
//   });
// }

export function useInfiniteApplications() {

  // let page = 1;

  const query = useInfiniteQuery({

    queryKey: ["metrics"],
    queryFn: ({ pageParam}) => fetchApplications(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage[lastPage.length -1].nextPage},
    maxPages: 7,
  });

  return query;

  // // return useInfiniteQuery<ProjectWithRank[], Error>({
  //   return useInfiniteQuery({

  //   queryKey: ["metrics"],
  //   queryFn: ({ pageParam}) => fetchApplications(pageParam),
  //   initialPageParam: 1,
  //   getNextPageParam: () => page + 1,
  //   maxPages: 14,
  // });
}

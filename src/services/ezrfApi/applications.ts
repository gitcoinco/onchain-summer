import { EZRF_API_URL, ROUND } from "./config";
import { ProjectsApiResponse } from "./types";
import { encodeInput } from "./utils";

export const fetchApplications = async (pageParam = 0, searchId: string | undefined = undefined) => {
  console.log("fetching page: " + pageParam);
  console.log("fetching searchId: " + searchId);
  const encodedInput = encodeInput({
    orderBy: "time",
    sortOrder: "asc",
    // limit: 200, // TODO: remove in case of not using infinite query
    cursor: pageParam,
    ...(searchId ? { search: searchId } : {})
  });

  const res = await fetch(
    `${EZRF_API_URL}projects.listSunnyProjects?input=${encodedInput}`,
    {
      headers: {
        "content-type": "application/json",
        "round-id": ROUND.id,
        "x-api-key": ROUND.key,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch applications");
  }

  const data: ProjectsApiResponse = await res.json();
  const projects = data.result.data.json;

  //TODO filter out projects where metrics is null
  // const metricsExist =  projects.filter((project) => project.metrics !== null);

  //find all projects where metrics is null and set each metric to zero
  projects.forEach((project) => {
    if (project.metrics === null) {
      project.metrics = {
        active_addresses_90D: 0,
        transactions_90D: 0,
        active_addresses_180D: 0,
        daily_active_addresses_180D: 0,
        daily_active_addresses_90D: 0,
        farcaster_users_180D: 0,
        farcaster_users_90D: 0,
        transactions_180D: 0,
      }
    }

  });


  return projects.map((project, index) => ({
    ...project,
    rank: index,
  }));
};

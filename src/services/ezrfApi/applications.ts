import { EZRF_API_URL, ROUND } from "./config";
import { ProjectsApiResponse } from "./types";
import { encodeInput } from "./utils";

export const fetchApplications = async (pageParam = 0) => {
  console.log("fetching page: " + pageParam);
  const encodedInput = encodeInput({
    orderBy: "time",
    sortOrder: "asc",
    // limit: 200, // TODO: remove in case of not using infinite query
    cursor: pageParam,
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

  //filter out projects where metrics is null
  let metricsExist =  projects.filter((project) => project.metrics !== null);

  return metricsExist.map((project, index) => ({
    ...project,
    rank: index,
  }));
};

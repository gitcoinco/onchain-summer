import { EZRF_API_URL, ROUND } from "./config";
import { ProjectsApiResponse, ProjectWithRank } from "./types";
import { encodeInput } from "./utils";

// TODO get approved project and it's metrics

// export const fetchApplications = async({ pageParam = 0 }): Promise<ProjectWithRank[]> => {
export const fetchApplications = async (pageParam = 0) => {
  console.log("fetching page: " + pageParam);
  const encodedInput = encodeInput({
    orderBy: "time",
    sortOrder: "asc",
    limit: 100,
    // skip: (page - 1) * 100,
    cursor: pageParam
    // cursor: (100 * (page - 1)) + 1,
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

  // return data.result.data.json

  return projects.map((project, index) => ({
    ...project,
    rank: index,
  }));
};

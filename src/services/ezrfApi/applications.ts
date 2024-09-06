import { EZRF_API_URL, ROUND } from "./config";
import {
  MetricsApiResponse,
  Project,
  ProjectWithMetrics,
  ProjectsApiResponse,
} from "./types";
import { encodeInput } from "./utils";


// TODO get approved project and it's metrics

export const fetchApplications = async (): Promise<Project[]> => {
  const encodedInput = encodeInput({
    orderBy: "time",
    sortOrder: "asc",
    limit: 10,
    skip: 0,
  });
  

  const res = await fetch(
    `${EZRF_API_URL}projects.listApproved?input=${encodedInput}`,
    {
      headers: {
        "content-type": "application/json",
        "round-id": ROUND.id,
        "x-api-key":ROUND.key
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch applications");
  }

  const data: ProjectsApiResponse = await res.json();
  return data.result.data.json;
};

export const fetchMetrics = async (): Promise<ProjectWithMetrics[]> => {
  const projects = await fetchApplications();
  const projectIds = projects.map(({ id }) => id);
  console.log(JSON.stringify(projectIds));
  const encodedInput = encodeInput({ projectIds });

  const res = await fetch(
    `${EZRF_API_URL}metrics.projects?input=${encodedInput}`,
    {
      headers: {
        "content-type": "application/json",
        "round-id": ROUND.id,
        "x-api-key":ROUND.key
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch metrics");
  }

  const data: MetricsApiResponse = await res.json();
  const metricsByProjectId = data.result.data.json;

  return projects.map((project, index) => ({
    ...project,
    metrics: metricsByProjectId[project.id] || {},
    rank: index
  }));
};

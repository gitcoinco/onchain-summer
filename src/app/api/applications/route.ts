import { NextRequest, NextResponse } from "next/server";
import { EZRF_API_URL, ROUND } from "@/services/ezrfApi/config";
import {
  ProjectsApiResponse,
  ProjectWithMetrics,
} from "@/services/ezrfApi/types";
import { encodeInput } from "@/services/ezrfApi/utils";

let cache: ProjectWithMetrics[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function fetchApplicationsFromAPI(pageParam: string, searchId?: string) {
  const encodedInput = encodeInput({
    orderBy: "time",
    sortOrder: "asc",
    cursor: Number(pageParam),
    ...(searchId ? { search: searchId } : {}),
  });

  const response = await fetch(
    `${EZRF_API_URL}projects.listSunnyProjects?input=${encodedInput}`,
    {
      headers: {
        "content-type": "application/json",
        "round-id": ROUND.id,
        "x-api-key": ROUND.key,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch applications");
  }

  const data: ProjectsApiResponse = await response.json();
  const projects = data.result.data.json;

  projects.forEach(project => {
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
      };
    }
  });

  return projects;
}

async function refreshCache(pageParam: string, searchId?: string) {
  try {
    const projects = await fetchApplicationsFromAPI(pageParam, searchId);
    cache = projects;
    lastFetchTime = Date.now();
  } catch (error) {
    console.error("Failed to refresh cache:", error);
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pageParam = searchParams.get("pageParam") || "0";
  const searchId = searchParams.get("searchId") || undefined;
  const projectId = searchParams.get("projectId");

  const now = Date.now();
  try {
    if (!cache || now - lastFetchTime > CACHE_DURATION) {
      await refreshCache(pageParam, searchId);
    }

    if (projectId) {
      const project = cache?.find(project => project.id === projectId);
      if (!project) {
        return NextResponse.json(
          { error: "Project not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(project);
    }

    const result = cache?.map((project, index) => ({
      ...project,
      rank: index,
    }));

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

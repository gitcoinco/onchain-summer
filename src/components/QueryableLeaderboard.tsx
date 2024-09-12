"use client"

// import { ProjectsTable } from "@/components/ProjectsTable";
import hero from "../images/herotitle.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import Details from "./Details";
import { ProjectWithRank } from "../services/ezrfApi/types";
import { ProjectsTable } from "./ProjectsTable/ProjectsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Leaderboard } from "./Leaderboard";
import { ProjectsProvider } from "../contexts/projectsContext";


export function QueryableLeaderboard() {


    const queryClient = new QueryClient();


    return (
        <QueryClientProvider client={queryClient}>
            <ProjectsProvider>
            <Leaderboard />
            </ProjectsProvider>
        </QueryClientProvider>
    );
}

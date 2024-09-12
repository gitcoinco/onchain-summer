import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Layout } from "./layouts";

import "./styles/index.css";
import { ProjectsProvider } from "./contexts/projectsContext";
import { Leaderboard } from "./pages/Leaderboard";
import '@fontsource/inter';
import '@fontsource/sora';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProjectsProvider>
            <Leaderboard />
          </ProjectsProvider>
        ),
      },

      
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

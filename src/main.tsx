import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Applications, Apply, Eligibility, Home, Rewards } from "./pages";
import { Layout } from "./layouts";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/eligibility",
        element: <Eligibility />,
      },
      {
        path: "/apply",
        element: <Apply />,
      },
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/rewards",
        element: <Rewards />,
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

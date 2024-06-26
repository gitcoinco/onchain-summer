import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/index.css";

import { Home } from "./Home";
import { Eligibility } from "./Eligibility";
import { Apply } from "./Apply";
import { Applications } from "./Applications";
import { Rewards } from "./Rewards";
import { Layout } from "./Layout";

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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

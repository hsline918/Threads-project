import { createBrowserRouter } from "react-router-dom";
import ThreadsAuth from "../components/auth/ThreadsAuth";
import MetricCard from "../components/metriccard/MetricCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ThreadsAuth />,
  },
  {
    path: "/callback",
    element: <MetricCard />,
  },
]);

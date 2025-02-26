import { createBrowserRouter } from "react-router-dom";
import ThreadsAuth from "../components/auth/ThreadsAuth";
// import MetricCard from "../components/metriccard/MetricCard";
import FrontPage from "../components/frontpage/Frontpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ThreadsAuth />,
  },
  {
    path: "/callback",
    element: <FrontPage />,
  },
]);

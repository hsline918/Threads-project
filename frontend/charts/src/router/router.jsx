import { createBrowserRouter } from "react-router-dom";
import ThreadsAuth from "../components/auth/ThreadsAuth";
// import MetricCard from "../components/metriccard/MetricCard";
import FrontPage from "../components/frontpage/Frontpage";
import FansCard from "../components/frontpage/FansCard";
import BestThreads from "../components/frontpage/BestThreads";

export const router = createBrowserRouter([
  //1. Landing Page
  {
    path: "/",
    element: <ThreadsAuth />,
  },
  //2. 授權後進來的主頁
  {
    path: "/callback",
    element: <FrontPage />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import ThreadsAuth from "../components/auth/ThreadsAuth";

import FrontPage from "../components/frontpage/DashboardLayout";
import BestThreadsAnalyze from "../components/analyze/best/Analyze";
import ThreadsAnalyze from "../components/analyze/threads/Analyze2";

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
  //3. 最佳串文分析頁面
  {
    path: "/analyze/best",
    element: <BestThreadsAnalyze />,
  },
  //4. 串文分析頁面
  {
    path: "/analyze/threads",
    element: <ThreadsAnalyze />,
  },
]);

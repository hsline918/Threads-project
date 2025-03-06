import { createBrowserRouter } from "react-router-dom";
import ThreadsAuth from "../components/auth/ThreadsAuth";

import FrontPage from "../components/frontpage/DashboardLayout";

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

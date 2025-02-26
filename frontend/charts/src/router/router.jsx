import { createBrowserRouter } from "react-router-dom";
import ThreadsAuth from "../components/auth/ThreadsAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ThreadsAuth />,
  },
  {
    path: "/callback",
    element: <div>auth call back</div>,
  },
]);

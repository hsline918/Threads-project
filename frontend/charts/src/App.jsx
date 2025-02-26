import "./App.css";
import ChartComponent from "./components/charts/ChartComponent";
import FrontPage from "./components/frontpage/Frontpage";
import LinkBotton from "./components/linkbotton/LinkBotton";
import MetricCard from "./components/MetricCard/MetricCard";
import PostInsights from "./components/post insights/PostInsights";
import Sidebar from "./components/sidebar/SideBar";
import ThreadsAuth from "./components/auth/ThreadsAuth";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <h1>Threads 數據分析儀表板</h1> */}
      {/* <ChartComponent /> */}
      {/* <FrontPage /> */}
      {/* <LinkBotton /> */}
      {/* <MetricCard /> */}
      {/* <PostInsights /> */}
      {/* <Sidebar /> */}
      {/* <ThreadsAuth /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

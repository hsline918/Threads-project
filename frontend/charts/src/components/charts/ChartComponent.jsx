import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// 註冊 Chart.js 組件
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// 建立圖表組件
function ChartComponent() {
  // 準備圖表數據
  const data = {
    labels: ["一月", "二月", "三月", "四月", "五月"],
    datasets: [
      {
        label: "Threads 互動數據",
        data: [65, 59, 80, 81, 56], //
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // 圖表配置
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "月度互動趨勢",
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default ChartComponent;

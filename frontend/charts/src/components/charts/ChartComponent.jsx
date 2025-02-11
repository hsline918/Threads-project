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

const postId = 17980871738800826;
// 獲取需要的圖表資料
async function getPostTrends(postId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/trends/post/${postId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("獲取數據失敗:", error);
  }
}

import { useState, useEffect } from "react";

// 建立圖表組件
function ChartComponent() {
  // 宣告 state 來存儲資料
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // 在 useEffect 中獲取資料
    async function fetchData() {
      const result = await getPostTrends(postId);
      setChartData(result); // 將資料存入 state
    }

    fetchData(); // 呼叫函數獲取資料
  }, []); // 空依賴陣列表示只在組件首次渲染時執行

  // 在資料載入前顯示載入中狀態
  if (!chartData) {
    return <div>載入中...</div>;
  }

  // 資料載入後，可以使用 chartData 進行後續處理
  console.log(chartData); // 這裡會顯示實際的資料，而不是 Promise

  const formattedTimestamps = chartData.map((item) => {
    // 建立 Date 物件
    const date = new Date(item.timestamp);

    // 取得年、月、日、時、分
    const year = date.getFullYear();
    // getMonth() 從 0 開始，所以要加 1
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    // 組合成想要的格式
    return `${year}/${month}/${day} ${hours}:${minutes}`;
  });

  const views = chartData.map((item) => {
    return item.views;
  });

  const data = {
    labels: formattedTimestamps,
    datasets: [
      {
        label: "Views",
        data: views, //
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
        text: "觀看次數趨勢",
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

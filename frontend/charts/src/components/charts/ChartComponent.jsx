import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const postId = "17980871738800826";

// 獲取資料的函數保持不變
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

function ChartComponent() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getPostTrends(postId);
      // 直接在這裡處理資料格式
      const formattedData = result.map((item) => ({
        timestamp: formatTimestamp(item.timestamp),
        views: item.views,
      }));
      setChartData(formattedData);
    }

    fetchData();
  }, []);

  // 時間格式化輔助函數
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${month}/${day} ${hours}:${minutes}`;
  };

  if (!chartData) {
    return <div>載入中...</div>;
  }

  return (
    <div style={{ width: "80%", margin: "20px auto", height: "400px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        貼文曝光隨時間趨勢
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            angle={0}
            height={60}
            tick={{
              fontSize: 16,
              dy: 14, // 向下移動文字
            }}
          />
          <YAxis />
          <Tooltip labelFormatter={() => ""} />
          <Legend />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#4BC0C0"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="曝光數"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartComponent;

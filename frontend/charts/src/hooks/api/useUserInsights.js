import { useState, useEffect } from "react";

import { ENDPOINTS } from "../../config/endpoints";
export const useThreadsUserInsights = (userId) => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setError(new Error("User ID is required"));
      setLoading(false);
      return;
    }

    const fetchUserInsights = async () => {
      try {
        const insightUrl = ENDPOINTS.getUserInsights(userId);
        const response = await fetch(insightUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // 直接保存原始數據結構
        setInsights(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInsights();
  }, [userId]);

  // 提供輔助函數來獲取特定指標的值
  const getMetricValue = (metricName) => {
    if (!insights?.data) return 0;
    const metric = insights.data.find((m) => m.name === metricName);
    return metric?.total_value?.value ?? 0;
  };

  return {
    insights,
    loading,
    error,
    getMetricValue,
  };
};

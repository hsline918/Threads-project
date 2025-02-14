import { useState, useEffect } from "react";
import { ENDPOINTS } from "../../config/endpoints";

export const useThreadsInsight = (mediaId) => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(false); // 初始設為 false
  const [error, setError] = useState(null);

  useEffect(() => {
    // 只有當 mediaId 存在時才開始載入
    if (mediaId) {
      setLoading(true); // 開始載入
      setError(null); // 清除之前的錯誤

      const fetchInsights = async () => {
        try {
          const response = await fetch(ENDPOINTS.getThreadsInsight(mediaId));
          const data = await response.json();
          setInsights(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchInsights();
    } else {
      // 當 mediaId 不存在時，重置狀態
      setInsights(null);
      setLoading(false);
      setError(null);
    }
  }, [mediaId]);

  return { insights, loading, error };
};

// hooks/useMetricsData.js

import { useThreadsMedia } from "../api/useMedia";
import { useThreadsInsight } from "../api/useInsight";
import { useThreadsUserInsights } from "../api/useUserInsights";

export function useMetricsData() {
  const {
    mediaObjects,
    loading: mediaLoading,
    error: mediaError,
  } = useThreadsMedia();
  const mediaId = mediaObjects?.data?.[0]?.id;
  const permalink = mediaObjects?.data?.[0]?.permalink;

  const {
    insights,
    loading: insightLoading,
    error: insightError,
  } = useThreadsInsight(mediaId);
  const { userInsights, userLoading, userError, getMetricValue } =
    useThreadsUserInsights("me");

  const isLoading = mediaLoading || insightLoading || userLoading;
  const error = mediaError || insightError || userError;

  const processedData = () => {
    if (!mediaId || !insights) return null;

    const metrics = insights.data.map((item) => item.values[0].value ?? 0);
    const [views, likes, replies, reposts, quotes, shares] = metrics;
    const followersCount = getMetricValue("followers_count");

    const interactionRate =
      views === 0
        ? "0%"
        : `${(
            ((likes + replies + reposts + quotes + shares) / views) *
            100
          ).toFixed(2)}%`;

    // 防止除以零的情況
    if (!followersCount) return 0;

    // 計算破圈率並保留兩位小數
    const viralRate = Number((views / followersCount).toFixed(2));

    return {
      mediaId,
      permalink,
      metrics: {
        views,
        likes,
        replies,
        reposts,
        quotes,
        shares,
        followersCount,
        interactionRate,
        viralRate,
      },
    };
  };

  return { data: processedData(), isLoading, error };
}

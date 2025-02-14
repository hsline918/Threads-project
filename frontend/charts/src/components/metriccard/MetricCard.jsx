import { useThreadsMedia } from "../../hooks/api/useThreadsMedia";
import { useThreadsInsight } from "../../hooks/api/useThreadsInsight";

export default function MetricCard() {
  // 1. 獲取媒體資料
  const {
    mediaObjects,
    loading: mediaLoading,
    error: mediaError,
  } = useThreadsMedia();

  // 2. 安全地提取 mediaId
  const mediaId = mediaObjects?.data?.[0]?.id;
  console.log(mediaObjects?.data);

  // 3. 獲取統計資料
  const {
    insights,
    loading: insightLoading,
    error: insightError,
  } = useThreadsInsight("18344571964149371");

  // 4. 處理各種載入和錯誤狀態
  if (mediaLoading) {
    return <div>正在載入媒體資料...</div>;
  }

  if (mediaError) {
    return <div>載入媒體資料時發生錯誤: {mediaError.message}</div>;
  }

  if (!mediaId) {
    return <div>無法獲取媒體 ID</div>;
  }

  if (insightLoading) {
    return <div>正在載入統計資料...</div>;
  }

  if (insightError) {
    return <div>載入統計資料時發生錯誤: {insightError.message}</div>;
  }

  // 5. 確保 insights 存在且包含所需數據
  if (!insights) {
    return <div>無法獲取統計資料</div>;
  }
  console.log(insights.views);
  // 6. 使用解構賦值時提供預設值，避免存取 null 的屬性
  const {
    views = 0,
    likes = 0,
    replies = 0,
    reposts = 0,
    quotes = 0,
    shares = 0,
  } = insights;

  // 7. 渲染資料
  return (
    <div className="space-y-4">
      <div className="font-medium">媒體 ID: {mediaId}</div>
      <div></div>
      <div>觀看數: {views}</div>
      <div>按讚數: {likes}</div>
      <div>回覆數: {replies}</div>
      <div>轉發數: {reposts}</div>
      <div>引用數: {quotes}</div>
      <div>分享數: {shares}</div>
    </div>
  );
}

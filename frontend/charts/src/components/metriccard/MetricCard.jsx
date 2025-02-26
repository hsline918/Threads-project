import { useMetricsData } from "../../hooks/metrics/useMetricData";
export default function MetricCard() {
  const { data, isLoading, error } = useMetricsData();

  if (isLoading) return <div>正在載入資料...</div>;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>無法獲取必要資料</div>;

  const { mediaId, permalink, metrics } = data;

  return (
    <div className="space-y-4">
      <div className="font-medium">媒體 ID: {mediaId}</div>
      <div>貼文觀看數: {metrics.views}</div>
      <div>貼文按讚數: {metrics.likes}</div>
      <div>貼文回覆數: {metrics.replies}</div>
      <div>貼文轉發數: {metrics.reposts}</div>
      <div>貼文引用數: {metrics.quotes}</div>
      <div>貼文分享數: {metrics.shares}</div>
      <div>粉絲數: {metrics.followersCount}</div>
      <div>貼文互動率: {metrics.interactionRate}</div>
      <div>破圈率: {metrics.viralRate}</div>
      <div>貼文連結: {permalink}</div>
    </div>
  );
}

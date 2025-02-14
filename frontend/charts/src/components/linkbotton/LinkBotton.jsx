import { useThreadsMedia } from "../../hooks/api/useThreadsMedia";
export default function MetricCard() {
  const { mediaObjects, loading, error } = useThreadsMedia();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!mediaObjects) return null;

  // 現在安全地解構 data
  const {
    data: [media],
  } = mediaObjects;
  console.log(media);

  const postLink = media.permalink;

  return <div>{postLink}</div>;
}

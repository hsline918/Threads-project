// config/endpoints.js
const ACCESS_TOKEN =
  "THAAP2bG4JYf5BYldfSjNCYlk1YTJiYzhNUUJwREhXdVBmdnhvOXpDRkZA4alJad0VFcmVyV1hZARGdXWmFhQklJOG1FdWRYdjZAURG95Mll5MnBRTVRBSFBSRUVVOVl4YlQwZAk1PMzQ4dEUyUVFpcS1fQjN5NDhLcGYydzRySFJfM1JmZAwZDZD";

export const ENDPOINTS = {
  // 靜態 URL 可以直接使用字串
  MEDIA_OBJECTS: `https://graph.threads.net/v1.0/me/threads?fields=id,media_product_type,media_type,media_url,permalink,owner,username,text,timestamp,shortcode,thumbnail_url,children,is_quote_post&limit=1&access_token=${ACCESS_TOKEN}`,

  // 需要動態參數的 URL 使用函數
  getThreadsInsight: (mediaId) =>
    `https://graph.threads.net/v1.0/${mediaId}/insights?metric=views,likes,replies,reposts,quotes,shares&access_token=${ACCESS_TOKEN}`,
};

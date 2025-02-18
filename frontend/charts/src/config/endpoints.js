// config/endpoints.js
const ACCESS_TOKEN =
  "THAAP2bG4JYf5BYldfSjNCYlk1YTJiYzhNUUJwREhXdVBmdnhvOXpDRkZA4alJad0VFcmVyV1hZARGdXWmFhQklJOG1FdWRYdjZAURG95Mll5MnBRTVRBSFBSRUVVOVl4YlQwZAk1PMzQ4dEUyUVFpcS1fQjN5NDhLcGYydzRySFJfM1JmZAwZDZD";

export const ENDPOINTS = {
  // 媒體物件 endpoint
  MEDIA_OBJECTS: `https://graph.threads.net/v1.0/me/threads?fields=id,media_product_type,media_type,media_url,permalink,owner,username,text,timestamp,shortcode,thumbnail_url,children,is_quote_post&limit=1&access_token=${ACCESS_TOKEN}`,

  // 貼文 insights endpoint（函數形式）
  getThreadsInsight: (mediaId) =>
    `https://graph.threads.net/v1.0/${mediaId}/insights?metric=views,likes,replies,reposts,quotes,shares&access_token=${ACCESS_TOKEN}`,

  // 使用者 insights endpoint（函數形式）
  getUserInsights: (userId) =>
    `https://graph.threads.net/v1.0/${userId}/threads_insights?metric=followers_count&access_token=${ACCESS_TOKEN}`,
};

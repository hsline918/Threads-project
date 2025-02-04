// import { tokenService } from "./access_token";

// const token = await tokenService();

//第一部分：threads media object(由於quokka不支援import所以token我直接複製貼上access_token)
function threads_api() {
  const media_object_url = `https://graph.threads.net/v1.0/me/threads?fields=id,media_product_type,media_type,media_url,permalink,owner,username,text,timestamp,shortcode,thumbnail_url,children,is_quote_post&limit=1&access_token=THAAP2bG4JYf5BYldfSjNCYlk1YTJiYzhNUUJwREhXdVBmdnhvOXpDRkZA4alJad0VFcmVyV1hZARGdXWmFhQklJOG1FdWRYdjZAURG95Mll5MnBRTVRBSFBSRUVVOVl4YlQwZAk1PMzQ4dEUyUVFpcS1fQjN5NDhLcGYydzRySFJfM1JmZAwZDZD`;

  async function retrieve_threads_media_objects() {
    try {
      const response = await fetch(media_object_url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const object_result = retrieve_threads_media_objects();
  // object_result;

  return object_result;
}

const threads_media_object_api = await threads_api();
// threads_media_object_api;
const {
  data: [media],
} = threads_media_object_api;

const THREADS_MEDIA_ID = media.id;

//第二部分：post insights
function postInsights() {
  const post_insight_url = `https://graph.threads.net/v1.0/${THREADS_MEDIA_ID}/insights?metric=views,likes,replies,reposts,quotes,shares&access_token=THAAP2bG4JYf5BYldfSjNCYlk1YTJiYzhNUUJwREhXdVBmdnhvOXpDRkZA4alJad0VFcmVyV1hZARGdXWmFhQklJOG1FdWRYdjZAURG95Mll5MnBRTVRBSFBSRUVVOVl4YlQwZAk1PMzQ4dEUyUVFpcS1fQjN5NDhLcGYydzRySFJfM1JmZAwZDZD`;

  async function retrieve_threads_media_objects() {
    try {
      const response = await fetch(post_insight_url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const object_result = retrieve_threads_media_objects();

  return object_result;
}

const media_insights_api = await postInsights();
// media_insights_api;

//第三部分：將API回傳數據扁平化，轉換成貼文資訊以及互動資料的資料結構
function transformThreadsData(threads_media_object_api, media_insights_api) {
  //解構API回應的資料
  const {
    data: [postData],
  } = threads_media_object_api;

  const post = {
    id: postData.id,
    text: postData.text,
    timestamp: postData.timestamp,
    media_type: postData.media_type,
    shortcode: postData.shortcode,
    permalink: postData.permalink,
  };

  //使用reduce來把他強制寫成我想要的格式

  const insights = media_insights_api.data.reduce(
    (acc, metric) => {
      acc[metric.name] = metric.values[0]?.value || 0;
      return acc;
    },
    {
      views: 0,
      likes: 0,
      replies: 0,
      reposts: 0,
      quotes: 0,
      shares: 0,
    }
  );

  return {
    post: post,
    insights: {
      engagement: insights,
      engagementHistory: [
        {
          timestamp: new Date().toISOString(),
          metrics: { ...insights },
        },
      ],
    },
  };
}

const flattened = transformThreadsData(
  threads_media_object_api,
  media_insights_api
);

flattened;

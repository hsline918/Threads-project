// import { tokenService } from "./access_token";

// const token = await tokenService();

//第一部分：threads media object(由於quokka不支援import所以token我直接複製貼上access_token)

let refreshTimer = null;
// const refreshTime = 10 * 1000;
// 24 * 60 * 60 * 1000

let accumulatedData = null;

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

  return object_result;
}

const threads_media_object_api = await threads_api();
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

//  使用初始化時呼叫
async function initializeInsights() {
  try {
    const initialData = await postInsights();
    refreshPostInsights();
    return initialData;
  } catch (error) {
    console.error("初始化時發生錯誤:", error);
    throw error;
  }
}

const media_insights_api = await initializeInsights();

//第四部分，定時更新資料
function refreshPostInsights() {
  if (refreshTimer) {
    clearInterval(refreshTimer);
  }
  refreshTimer = setInterval(async () => {
    try {
      const data = await postInsights();
      const updatedData = transformThreadsData(threads_media_object_api, data);

      console.log("新的資料已更新:", updatedData);
    } catch (error) {
      console.error("更新資料時發生錯誤:", error);
    }
  }, refreshTime);
}

//第三部分：將API回傳數據扁平化，轉換成貼文資訊以及互動資料的資料結構
function transformThreadsData(threads_media_object_api, media_insights_api) {
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

  let currentInsights = media_insights_api.data.reduce(
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

  console.log("currentInsights:", currentInsights);

  if (!accumulatedData) {
    accumulatedData = {
      post: post,
      insights: {
        engagement: currentInsights,
        engagementHistory: [
          {
            timestamp: new Date().toISOString(),
            metrics: currentInsights,
          },
        ],
      },
    };
  } else {
    accumulatedData.insights.engagement = currentInsights;
    accumulatedData.insights.engagementHistory.push({
      timestamp: new Date().toISOString(),
      metrics: currentInsights,
    });
    console.log(
      "看看metrics裡面是什麼",
      accumulatedData.insights.engagementHistory
    );
  }

  return accumulatedData;
}

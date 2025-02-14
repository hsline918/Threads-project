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

let refreshTimer = null;
const refreshTime = 1 * 1000; //一小時抓一次data，

//  使用初始化時呼叫
async function initializeInsights() {
  try {
    const initialData = await postInsights();
    refreshPostInsights();
    console.log("Initial data:", initialData);
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
      saveThreadsData(updatedData);
      console.log("新的資料已更新:", updatedData);
      return updatedData;
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

  const post_info = {
    post: post,
    insights: currentInsights,
  };

  return post_info;
}

//----------------開始寫進資料庫------------------------

import Database from "better-sqlite3";
const db = new Database("threads_data.db");

// 定義貼文表格
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY,
    text TEXT,
    timestamp TEXT,
    media_type TEXT,
    shortcode TEXT,
    permalink TEXT
  );
`);

// 定義互動指標表格
db.exec(`
  CREATE TABLE IF NOT EXISTS engagement_metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id TEXT,
    timestamp TEXT,
    views INTEGER,
    likes INTEGER,
    replies INTEGER,
    reposts INTEGER,
    quotes INTEGER,
    shares INTEGER,
    FOREIGN KEY (post_id) REFERENCES posts(id)
  );
`);

function saveThreadsData(transformedData) {
  // 準備 SQL 語句
  const insertPost = db.prepare(`
    INSERT OR REPLACE INTO posts 
    (id, text, timestamp, media_type, shortcode, permalink)
    VALUES (@id, @text, @timestamp, @media_type, @shortcode, @permalink)
  `);

  const insertMetrics = db.prepare(`
    INSERT INTO engagement_metrics 
    (post_id, timestamp, views, likes, replies, reposts, quotes, shares)
    VALUES (@post_id, @timestamp, @views, @likes, @replies, @reposts, @quotes, @shares)
  `);

  // 在一個交易中執行所有操作
  const transaction = db.transaction((data) => {
    // 插入貼文
    insertPost.run(data.post);

    // 插入最新的互動指標
    const metricsData = {
      post_id: data.post.id,
      timestamp: new Date().toISOString(),
      ...data.insights, // 展開當前的互動指標
    };

    insertMetrics.run(metricsData);
  });

  // 執行交易
  transaction(transformedData);
}

function checkDatabase() {
  // 連接 posts 和 engagement_metrics 表格
  const postsWithMetrics = db
    .prepare(
      `
    SELECT p.*, e.views, e.likes, e.replies, e.reposts, e.quotes, e.shares
    FROM posts p
    LEFT JOIN engagement_metrics e ON p.id = e.post_id
  `
    )
    .all();

  console.log("貼文及互動資料：", postsWithMetrics);
}

checkDatabase();

//-------------這裡開始設計API-------------------

import express from "express";
const app = express();

import cors from "cors"; // 首先安裝 cors: npm install cors

// 配置 CORS
app.use(
  cors({
    origin: "http://localhost:5173", // 允許的前端域名
    methods: ["GET", "POST", "PUT", "DELETE"], // 允許的 HTTP 方法
    credentials: true, // 如果需要傳送 cookies
  })
);

// 添加根路由
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Threads API Server",
    endpoints: {
      stop: "/api/stop - 停止資料收集",
      status: "/api/status - 查看服務器狀態",
      trends: "/api/trends/post/:id - 獲取特定貼文的趨勢數據",
    },
    serverTime: new Date().toISOString(),
  });
});

// 在 Express 應用中添加關閉端點
app.get("/api/stop", (req, res) => {
  stopDataCollection();
  db.close(); // 關閉資料庫連接
  console.log("資料庫連接已關閉");
  res.json({
    message: "資料收集已停止",
    timestamp: new Date().toISOString(),
  });
});

function stopDataCollection() {
  if (refreshTimer) {
    clearInterval(refreshTimer);
    refreshTimer = null;
    console.log("資料收集已停止");
  }
}

// 查看狀態的路由
app.get("/api/status", (req, res) => {
  res.json({
    running: refreshTimer !== null,
    serverTime: new Date().toISOString(),
  });
});

///!!!!!!我的data形式就定義在這裡

app.get("/api/trends/post/:id", (req, res) => {
  // 準備 SQL 查詢，使用 db.prepare 來預防 SQL 注入攻擊
  const data = db
    .prepare(
      `
    SELECT 
      timestamp,   
      views,      
      likes,      
      replies,    
      reposts,   
      quotes,     
      shares     
    FROM engagement_metrics  
    WHERE post_id = ?       
    ORDER BY timestamp     
  `
    )
    .all(req.params.id); // 執行查詢，傳入 URL 中的貼文 ID

  // 將查詢結果以 JSON 格式回傳給前端
  res.json(data);
});

// 404 錯誤處理
app.use((req, res) => {
  res.status(404).json({
    error: "找不到請求的路徑",
    path: req.path,
  });
});

// 設定伺服器端口
const PORT = 3000; // 你可以選擇任何可用的端口號

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器運行在 http://localhost:${PORT}`);
});

//如果定時器沒有正確清除的話，執行以下程式碼：
// function clearAllTimers() {
//   let id = setTimeout(function () {}, 0);

//   console.log(`開始清除計時器，最後一個計時器ID: ${id}`);

//   while (id >= 0) {
//     clearInterval(id);
//     clearTimeout(id);
//     id--;
//   }

//   console.log("所有計時器已清除");
// }
// clearAllTimers();

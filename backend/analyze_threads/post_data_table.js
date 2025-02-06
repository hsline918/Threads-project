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
  const { post, insights } = transformedData;

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
      ...data.insights.engagement, // 展開當前的互動指標
    };

    insertMetrics.run(metricsData);
  });

  // 執行交易
  transaction(transformedData);
}

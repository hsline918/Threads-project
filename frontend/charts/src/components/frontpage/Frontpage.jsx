import {
  LayoutGrid,
  BarChart2,
  FileText,
  Users,
  MessageCircle,
  Share2,
  Repeat2,
} from "lucide-react";

const ThreadsDashboard = () => {
  // 模擬文章數據，與之前相同
  const posts = [
    {
      id: 1,
      content:
        "[冷知識] 喝西芹汁讓我味覺改變？喝了西芹汁以及攝取大量蔬果一個多禮拜，今天突然想吃一下軟糖，是ACE的無糖Q軟 測驗，結果一咬下去一股化學藥味我直接吐出來😮，是比壓舌籤還嗆心的味道，但以前我超愛吃這個軟糖 其實大概喝西芹汁兩三天，我就注意到B群味道聞起來不一樣，以前覺得B群很臭，現在覺得他有一股香味... 神奇西芹汁",
      time: "2025/02/12 03:18:11",
      stats: {
        views: 323,
        comments: 6,
        reposts: 0,
        quotes: 0,
        likes: 0,
        shares: 0,
      },
    },
    {
      id: 2,
      content:
        "如果說分心是人的本能，當壓力大的時候用分心來控制自己的衝動，似乎是一個不錯的想法",
      time: "2025/02/12 11:37:34",
      stats: {
        views: 317,
        comments: 2,
        reposts: 0,
        quotes: 0,
        likes: 0,
        shares: 0,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 側邊導航 */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
            TD
          </div>
          <span className="font-semibold">Threads Dashboard</span>
        </div>

        <nav className="space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-2 bg-gray-100 rounded-lg transition-colors">
            <LayoutGrid size={20} />
            <span>儀表板</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <BarChart2 size={20} />
            <span>分析</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <FileText size={20} />
            <span>串文</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Users size={20} />
            <span>追蹤者</span>
          </button>
        </nav>
      </div>

      {/* 主要內容區 */}
      <div className="ml-64 p-8">
        {/* 頂部歡迎區 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div>
                <h2 className="text-xl font-semibold">pusheenlin</h2>
                <p className="text-gray-500">追蹤者: 627</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              分享到 Threads
            </button>
          </div>
        </div>

        {/* 關鍵指標區 */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">關鍵指標</h2>
              <span className="text-sm text-gray-500">最近 7 天</span>
            </div>
          </div>
          <div className="p-6">
            <div className="text-center text-gray-600">
              此功能僅適用於專業版方案。
              <button className="block mx-auto mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                訂閱
              </button>
            </div>
          </div>
        </div>

        {/* 最近申文區 */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">最近 5 個串文</h2>
              <button className="text-sm text-gray-500 hover:text-gray-700">
                顯示全部
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="border-b border-gray-100 pb-6 last:border-b-0"
                >
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">pusheenlin</span>
                        <span className="text-sm text-gray-500">
                          {post.time}
                        </span>
                      </div>
                      <p className="text-gray-800 mb-3">{post.content}</p>
                      <div className="flex items-center space-x-6 text-gray-500">
                        <div className="flex items-center space-x-2">
                          <span>{post.stats.views}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageCircle size={18} />
                          <span>{post.stats.comments}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Repeat2 size={18} />
                          <span>{post.stats.reposts}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Share2 size={18} />
                          <span>{post.stats.shares}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadsDashboard;

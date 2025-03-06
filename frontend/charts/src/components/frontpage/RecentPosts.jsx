"use client";
import PostItem from "./PostItem";

export default function RecentPosts() {
  const posts = [
    {
      author: "James Fok",
      time: "3 小時",
      tag: "心情",
      content:
        "Threads 儀表板開發日記Day7 - 敏感資訊放在.env管理並使用.gitignore 今天整理了一下程式碼發現之前用的一些access token",
      stats: {
        views: "400,123",
        likes: "96",
        comments: "882",
        reposts: "96",
        quotes: "96",
        shares: "96",
      },
    },
    // Repeated for other posts...
  ];

  return (
    <section className="p-4 bg-white rounded-xl border border-gray-200">
      <header className="flex items-center mb-6">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3C6.10218 3 5.72064 3.15804 5.43934 3.43934C5.15804 3.72064 5 4.10218 5 4.5V16.3377C5.46443 16.1174 5.97616 16 6.5 16H19V3H6.5ZM21 3C21 2.46957 20.7893 1.96086 20.4142 1.58579C20.0391 1.21071 19.5304 1 19 1H6.5C5.57174 1 4.6815 1.36875 4.02513 2.02513C3.36875 2.6815 3 3.57174 3 4.5V19.5C3 20.4283 3.36875 21.3185 4.02513 21.9749C4.6815 22.6313 5.57174 23 6.5 23H19C19.5304 23 20.0391 22.7893 20.4142 22.4142C20.7893 22.0391 21 21.5304 21 21V3ZM19 18H6.5C6.10218 18 5.72064 18.158 5.43934 18.4393C5.15804 18.7206 5 19.1022 5 19.5C5 19.8978 5.15804 20.2794 5.43934 20.5607C5.72064 20.842 6.10218 21 6.5 21H19V18ZM15.7071 6.79289C16.0976 7.18342 16.0976 7.81658 15.7071 8.20711L11.7071 12.2071C11.3166 12.5976 10.6834 12.5976 10.2929 12.2071L8.29289 10.2071C7.90237 9.81658 7.90237 9.18342 8.29289 8.79289C8.68342 8.40237 9.31658 8.40237 9.70711 8.79289L11 10.0858L14.2929 6.79289C14.6834 6.40237 15.3166 6.40237 15.7071 6.79289Z" fill="#030712"></path></svg>',
          }}
          className="mr-2"
        />
        <h2 className="text-base font-medium text-gray-950">最近串文</h2>
      </header>

      <div className="flex items-center justify-center px-0 py-3 mb-6 rounded-xl border border-gray-200">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12H16M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#030712" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
          }}
          className="mx-2"
        />
        <span className=" text-sm font-medium text-gray-950">排程串文</span>
      </div>

      <div>
        {posts.map((post, index) => (
          <PostItem key={index} {...post} />
        ))}
      </div>

      <p className="text-sm font-medium text-center text-gray-950">查看全部</p>
    </section>
  );
}

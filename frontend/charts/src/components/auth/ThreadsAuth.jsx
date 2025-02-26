import { useEffect } from "react";

const ThreadsAuth = () => {
  useEffect(() => {
    // 使用環境變數或安全存儲的方式獲取APP_ID
    const APP_ID = import.meta.env.VITE_APP_ID;
    console.log(APP_ID);
    const redirectUri = "https://threads-sample.meta:8000/callback";

    // 建構OAuth URL - 確保包含所有必要參數
    const authUrl = `https://www.threads.net/oauth/authorize?client_id=${APP_ID}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=threads_basic&response_type=code`;

    // 可選：記錄URL以進行調試
    console.log("Auth URL:", authUrl);
  }, []);

  const handleConnect = () => {
    const APP_ID = import.meta.env.VITE_APP_ID;
    const redirectUri = "https://threads-sample.meta:8000/callback";

    // 建構完整的OAuth URL
    const authUrl = `https://www.threads.net/oauth/authorize?client_id=${APP_ID}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=threads_basic&response_type=code`;

    // 重定向到Meta授權頁面
    window.location.href = authUrl;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={handleConnect}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        授權連接到您到threads
      </button>
    </div>
  );
};

export default ThreadsAuth;

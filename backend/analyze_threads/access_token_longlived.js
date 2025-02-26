//1. Long term access token
import dotenv from "dotenv";
dotenv.config(); //將數據載入

function tokenService() {
  const SHORT_LIVED_ACCESS_TOKEN = process.env.THREADS_SHORT_LIVED_ACCESS_TOKEN;
  const threads_app_secret = process.env.THREADS_APP_SECRET;

  let currentToken = null;
  let expireTime = null;
  let refreshTimer = null;

  const url = `https://graph.threads.net/access_token?grant_type=th_exchange_token
  &client_secret=${threads_app_secret}
  &access_token=${SHORT_LIVED_ACCESS_TOKEN}`;

  async function get_long_lived_access_token() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      currentToken = data.access_token;
      expireTime = data.expires_in * 1000;
      scheduleRefresh();
      return currentToken;
      //一定要所有的東西都放在try&catch裡面嗎？data會不會讀取不到？try裡面一定要放return嗎？這裡的try&catch邏輯是為了要防止什麼錯誤？
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const token = get_long_lived_access_token();

  //SetTimeInterval to control refresh timing

  const scheduleRefresh = () => {
    // 先清除舊的計時器，不然可能會導致記憶體洩漏的問題。(因為此段程式碼可能會多次執行，但是舊的計時器仍會存在)
    if (refreshTimer) {
      clearInterval(refreshTimer);
    }

    //我要在過期前七天就自動更新token
    const timeUntilRefresh = expireTime - 7 * 24 * 60 * 60 * 1000;
    refreshTimer = setInterval(
      refresh_long_lived_access_token,
      timeUntilRefresh
    );
  };

  const refresh_url = `https://graph.threads.net/refresh_access_token
  ?grant_type=th_refresh_token
  &access_token=${token}`;

  async function refresh_long_lived_access_token() {
    try {
      const response = await fetch(refresh_url);
      const data = response.json();
      currentToken = data.access_token;
      return currentToken;
    } catch (error) {
      console.error("Error: ${error}");
    }
  }
  return token;
}
const result = await tokenService();

// todo: 重構封装(使用閉包特性)成Token Service，只讓threads api可以access。

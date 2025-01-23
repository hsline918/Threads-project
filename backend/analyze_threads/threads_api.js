//1. Long term access token
function tokenService() {
  const SHORT_LIVED_ACCESS_TOKEN =
    "THAAP2bG4JYf5BYlZAKRjY1RFpWdkhqUk1yXzl1QW54OUUtb01keXR1UC0wUW9rR2M0c0VienFmNVlrQVkxVDFvbHhQanNieHNMeEJvRFV6VDA2LTMtV05JLS1pdEwyLWpBcENpNmgwcE9KbGRuV0U1aWdpWUd0QXZATTm94QmliRVNJcXRiSHJsLUFPSEtRN0w3dGtLUXZAsWmlRZAwZDZD";
  const threads_app_secret = "4d13965c4d21bc0486a0d94fb2c61b33";

  let currentToken = null;
  // let expireTime = null;
  // let refreshTimer = null;

  const url = `https://graph.threads.net/access_token?grant_type=th_exchange_token
  &client_secret=${threads_app_secret}
  &access_token=${SHORT_LIVED_ACCESS_TOKEN}`;

  async function get_long_lived_access_token() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      currentToken = data.access_token;
      // expireTime = data.expires_in * 1000;
      // scheduleRefresh();
      return currentToken;
      //一定要所有的東西都放在try&catch裡面嗎？data會不會讀取不到？try裡面一定要放return嗎？這裡的try&catch邏輯是為了要防止什麼錯誤？
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const token = get_long_lived_access_token();

  //SetTimeInterval to control refresh timing

  // const scheduleRefresh = () => {
  //   //我要在前七天就自動更新token
  //   const timeUntilRefresh = expireTime - 7 * 24 * 60 * 60 * 1000;
  //   refreshTimer = setInterval(
  //     refresh_long_lived_access_token,
  //     timeUntilRefresh
  //   );
  // };

  // const refresh_url = `https://graph.threads.net/refresh_access_token
  // ?grant_type=th_refresh_token
  // &access_token=${LONG_LIVED_ACCESS_TOKEN}`;

  // async function refresh_long_lived_access_token() {
  //   try {
  //     const response = await fetch(refresh_url);
  //     const data = response.json();
  //     currentToken = data.access_token;
  //     return currentToken;
  //   } catch (error) {
  //     console.error("Error: ${error}");
  //   }
  // }
  return token;
}
const result = await tokenService();
result;

// todo: 重構封装(使用閉包特性)成Token Service，只讓threads api可以access。

//Quokka無法使用import所以以上是直接複製貼上access_token~看起來是可以使用的。
// import { tokenService } from "./access_token";

const token = await tokenService();
function threads_api() {
  const media_object_url = `https://graph.threads.net/v1.0/me/threads?fields=id,media_product_type,media_type,media_url,permalink,owner,username,text,timestamp,shortcode,thumbnail_url,children,is_quote_post&limit=1&access_token=${token}`;

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

const object = await threads_api();
object;

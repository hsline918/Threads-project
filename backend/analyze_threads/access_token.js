//1. Long term access token
const SHORT_LIVED_ACCESS_TOKEN = ""; //generate from Graph API Explorer
const threads_app_secret = "4d13965c4d21bc0486a0d94fb2c61b33"; // App Dashboard -> App setting -> Basic -> App secret

const url = `https://graph.threads.net/access_token?grant_type=th_exchange_token
  &client_secret=${threads_app_secret}
  &access_token=${SHORT_LIVED_ACCESS_TOKEN}`;

async function get_long_lived_access_token(short_lived_access_token) {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error: ${error}");
  }
}
const LONG_LIVED_ACCESS_TOKEN = get_long_lived_access_token(
  SHORT_LIVED_ACCESS_TOKEN
);

//sample response:
//  {
//   "access_token": "<LONG_LIVED_USER_ACCESS_TOKEN>",
//   "token_type": "bearer",
//   "expires_in": 5183944  // number of seconds until token expires(60days)
// }

// 2. refresh long-term access token

const refresh_url = `https://graph.threads.net/refresh_access_token
  ?grant_type=th_refresh_token
  &access_token=${LONG_LIVED_ACCESS_TOKEN}`;

async function refresh_long_lived_access_token() {
  try {
    const response = await fetch(refresh_url);
    const data = response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error: ${error}");
  }
}

LONG_LIVED_ACCESS_TOKEN = refresh_long_lived_access_token(
  LONG_LIVED_ACCESS_TOKEN
);

//sample response:
// {
//   "access_token": "<LONG_LIVED_USER_ACCESS_TOKEN>",
//   "token_type": "bearer",
//   "expires_in": 5183944 // number of seconds until token expires
// }

// todo: 重構封装(使用閉包特性)成Token Service，只讓threads api可以access。

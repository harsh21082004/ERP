import dotenv from 'dotenv';

dotenv.config();

const config = {
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  SESSION_SECRET: process.env.SESSION_SECRET,

  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
  TWITTER_TOKEN_SECRET: process.env.TWITTER_TOKEN_SECRET,

  TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET,
  TWITTER_REDIRECT_URL:
    process.env.TWITTER_REDIRECT_URL ||
    "https://baeapp.ai/api/auth/twitter/redirect",

  FRONT_END_BASE_URL: process.env.FRONTEND_BASE_URL,
  FRONT_END_JOIN_PAGE_URL: process.env.FRONTEND_JOIN_PAGE_URL,
  BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
};

export default config;

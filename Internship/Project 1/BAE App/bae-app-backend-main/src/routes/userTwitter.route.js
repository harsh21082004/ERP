import { Router } from 'express';
import { isLoggedIn } from '../middlewares/auth.middleware.js';
import BaeData from '../models/baeData.model.js';
import UserAuth from '../models/userAuth.model.js';
import { TwitterApi } from 'twitter-api-v2';
import moment from 'moment';

const router = Router();

router.get('/created-posts', isLoggedIn, async (req, res) => {
  try {
    const { twitterId } = req.user;
    const twitterAuth = await UserAuth.findOne({ twitterId });

    if (!twitterAuth) {
      return res.redirect('/join');
    }

    var client = new TwitterApi({
      appKey: process.env.TWITTER_CONSUMER_KEY,
      appSecret: process.env.TWITTER_CONSUMER_SECRET,
      accessToken: twitterAuth.twitterTokens.accessToken,
      accessSecret: twitterAuth.twitterTokens.accessTokenSecret,
    });

    const { lastFetchedAt = moment().subtract(7, 'day'), totalTweets = 0 } =
      twitterAuth?.farmData || {};

    // Prevent rate limiting by a single user
    if (moment(lastFetchedAt).isAfter(moment().subtract(15, 'minutes'))) {
      return res.json({
        statusCode: 200,
        success: true,
        data: {
          farmData: twitterAuth?.farmData || {},
        },
      });
    }

    let data;
    try {
      console.log('FETCHING DATA FROM TWITTER API');
      data = await client.search(
        `@baeappai (from:${twitterAuth.twitterHandle})`,
        {
          max_results: 100,
          start_time: moment(lastFetchedAt).toISOString(),
          'tweet.fields': 'created_at',
        }
      );
    } catch (error) {
      return res.json({
        statusCode: 200,
        success: true,
        data: {
          farmData: twitterAuth?.farmData,
        },
      });
    }
    const newlyFetchedCount = data._realData.meta.result_count;
    const lastFetched = data._realData?.data?.[0].created_at
      ? moment(data._realData?.data?.[0].created_at)
          .add(1, 'second')
          .toISOString()
      : moment().toISOString();

    const newFarmData = {
      ...(twitterAuth?.farmData || {}),
      lastFetchedAt: lastFetched,
      totalTweets: totalTweets + newlyFetchedCount,
    };

    await UserAuth.findOneAndUpdate(
      { twitterId },
      {
        $set: {
          farmData: newFarmData,
        },
      }
    );

    return res.json({
      statusCode: 200,
      success: true,
      data: {
        farmData: newFarmData,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      statusCode: 400,
      success: false,
      message: error.message || 'Failed to get data',
    });
  }
});

export default router;

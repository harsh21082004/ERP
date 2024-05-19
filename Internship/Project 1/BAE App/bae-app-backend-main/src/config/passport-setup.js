import passport from 'passport';
import TwitterStrategy from 'passport-twitter';
import { loginOrSignupUserTwitter } from '../middlewares/auth.middleware.js';
import User from '../models/user.model.js';
import config from './index.js';
import UserAuth from '../models/userAuth.model.js';

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((userObj, done) => {
  done(null, userObj._id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);

    let userAuth = null;
    if (user) {
      userAuth = await UserAuth.findOne({ userId: user._id });
    }
    const result = { ...user.toJSON(), userAuth: userAuth.toJSON() };
    done(null, result);
  } catch (error) {
    console.log(error);
    done(new Error('Failed to deserialize an user'));
  }
});
passport.use(
  new TwitterStrategy(
    {
      consumerKey: config.TWITTER_CONSUMER_KEY,
      consumerSecret: config.TWITTER_CONSUMER_SECRET,
      callbackURL: config.TWITTER_REDIRECT_URL,
      passReqToCallback: true,
    },
    loginOrSignupUserTwitter
  )
);

export default passport;

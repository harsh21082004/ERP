import { nanoid } from 'nanoid';
import User from '../models/user.model.js';
import { TwitterApi } from 'twitter-api-v2';
import UserAuth from '../models/userAuth.model.js';

export const isLoggedIn = async (req, res, next) => {
  try {
    if (!req.user._id) throw new Error('User not logged in');

    next();
  } catch (error) {
    return res.status(401).json({
      statusCode: 401,
      success: false,
      message: 'Unauthorized',
    });
  }
};

export const loginOrSignupUserTwitter = async (
  req,
  _token,
  _tokenSecret,
  profile,
  done
) => {
  // find current user in UserModel
  const currentUser = await User.findOne({
    twitterId: profile._json.id_str,
  });

  let userAuth = await UserAuth.findOne({ userId: currentUser?._id });
  console.log(userAuth)
  if (!userAuth) {
    userAuth = new UserAuth({
      userId: currentUser._id,
      twitterId: profile.id,
      twitterHandle: profile._json.screen_name,
      farmData: {},
      twitterTokens: {
        accessToken: _token,
        accessTokenSecret: _tokenSecret,
      },
    });
    await userAuth.save();
  } else {
    userAuth.twitterTokens.accessToken = _token;
    userAuth.twitterTokens.accessTokenSecret = _tokenSecret;
    userAuth.twitterHandle = profile._json.screen_name;
    await userAuth.save();
  }

  // create new user if the database doesn't have this user
  if (!currentUser) {
    const referralId = req.session.referralId;
    console.log('REFERRAL_ID', referralId);

    if (referralId) {
      const isReferralIdValid = await User.findOne({
        referralId,
      });
      if (!isReferralIdValid) return done(new Error('Invalid referral id'));
    }
    const newUserObj = {
      name: profile._json.name,
      screenName: profile._json.screen_name,
      twitterId: profile._json.id_str,
      profileImageUrl: profile._json.profile_image_url,
      followersCount: profile._json.followers_count,
      referralId: nanoid(),
    };
    if (referralId) {
      newUserObj.totalPoint = 500;
    }
    const newUser = await new User(newUserObj).save();

    if (referralId) {
      try {
        const referredUser = await User.findOneAndUpdate(
          {
            referralId,
          },
          {
            $inc: {
              totalPoint: 1000,
            },
            $push: {
              invitees: {
                user: newUser._id,
                referralPoint: 1000,
              },
            },
          },
          {
            new: true,
          }
        );

        if (!referredUser?._id)
          return done(new Error('Failed to use referral'));
      } catch (error) {
        return done(error);
      }
    }

    if (newUser) {
      return done(null, { ...newUser.toJSON(), userAuth });
    }
  }

  currentUser.followersCount = profile._json.followers_count;
  currentUser.save();

  return done(null, { ...currentUser.toJSON(), userAuth });
};

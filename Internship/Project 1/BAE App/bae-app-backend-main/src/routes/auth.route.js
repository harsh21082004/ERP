import { Router } from 'express';
import passport from 'passport';
import config from '../config/index.js';
import { isLoggedIn } from '../middlewares/auth.middleware.js';
import User from '../models/user.model.js';

const CLIENT_HOME_PAGE_URL = process.env.CLIENT_HOME_PAGE_URL;

const router = Router();

// when login is successful, retrieve user info
router.get('/profile', isLoggedIn, (req, res) => {
  res.json({
    success: true,
    message: 'user has successfully authenticated',
    data: req.user,
  });
});

// when login failed, send failed msg
router.get('/login/failed', (req, res) => {
  res.status(401).json({
    message: 'User failed to authenticate.',
  });
});

// When logout, redirect to client
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL);
});

// auth with twitter
router.get(
  '/twitter',
  (req, res, next) => {
    req.session.referralId = req.query.referralId;
    req.session.save(next);
  },
  passport.authenticate('twitter', {
    scope: ['tweet.read', 'users.read', 'offline.access', 'follows.read'],
  })
);

// redirect to home page after successfully login via twitter
router.use(
  '/twitter/redirect',
  passport.authenticate('twitter', {
    failureRedirect: '/api/auth/login/failed',
  }),
  (req, res) => {
    res.redirect(CLIENT_HOME_PAGE_URL);
  }
);

// redirect to home page after successfully login via twitter
// router.get(
//   '/twitter/redirect',
//   function (req, res, next) {
//     passport.authenticate('twitter', async function (err, user) {
//       if (err || !user._id) {
//         next(err);
//       }

//       console.log('SESSION', req.session);

//       const referralId = req.session.referralId;

//       if (referralId) {
//         try {
//           const referredUser = await User.findOneAndUpdate(
//             {
//               referralId,
//               _id: {
//                 $ne: user._id,
//               },
//             },
//             {
//               $inc: {
//                 totalPoint: 10,
//               },
//               $push: {
//                 invitees: {
//                   user: user._id,
//                   referralPoint: 10,
//                 },
//               },
//             },
//             {
//               new: true,
//             }
//           );
//           console.log({ referredUser, user });

//           if (!referredUser?._id) next(new Error('Failed to use referral'));
//         } catch (error) {
//           // return res.status(401).json({
//           //   statusCode: 401,
//           //   success: false,
//           //   message: 'Failed to use referral',
//           // });
//           next(error);
//         }
//       }

//       res.redirect(CLIENT_HOME_PAGE_URL);
//     })(req, res, next);
//   },
//   (req, res) => {
//     console.log('USER', req.user);
//     res.redirect(CLIENT_HOME_PAGE_URL);
//   }
// );

// redirect to home page after successfully login via twitter
router.post('/wallet', isLoggedIn, async (req, res) => {
  const { walletAddress } = req.body;

  const user = await User.findOneAndUpdate(
    {
      _id: req.user._id,
    },
    {
      $set: {
        walletAddress,
      },
    },
    {
      new: true,
    }
  );

  res.json({
    success: true,
    message: 'user has successfully authenticated',
    data: user,
  });
});

export default router;

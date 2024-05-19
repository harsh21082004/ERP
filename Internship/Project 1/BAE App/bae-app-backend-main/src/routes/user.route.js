import { Router } from 'express';
import { isLoggedIn } from '../middlewares/auth.middleware.js';
import User from '../models/user.model.js';

const router = Router();

router.get('/invitees', isLoggedIn, async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).populate({
      path: 'invitees',
      populate: {
        path: 'user',
        model: 'User',
      },
    });

    return res.json({
      statusCode: 200,
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      success: false,
      message: error.message || 'Failed to get invitees',
    });
  }
});

router.get('/leaderboard', isLoggedIn, async (req, res) => {
  try {
    const { page = 1, limit: queryLimit = 40 } = req.query;

    if (!req.user) {
      return res.redirect('/join');
    }

    const limit = +queryLimit;

    const users = await User.aggregate([
      {
        $lookup: {
          from: 'userauths', // Assuming the name of the collection is "userAuth"
          localField: '_id',
          foreignField: 'userId',
          as: 'userAuthData',
        },
      },
      {
        $unwind: {
          path: '$userAuthData',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          totalBaePoints: {
            $add: [
              { $multiply: ['$totalPoint', '$multiplier'] },
              {
                $let: {
                  vars: {
                    totalTweets: {
                      $ifNull: [
                        {
                          $sum: {
                            $ifNull: [
                              {
                                $ifNull: [
                                  '$userAuthData.farmData.totalTweets',
                                  0,
                                ],
                              },
                              0,
                            ],
                          },
                        },
                        0,
                      ],
                    },
                  },
                  in: {
                    $switch: {
                      branches: [
                        {
                          case: { $lte: ['$followersCount', 10000] },
                          then: { $multiply: ['$$totalTweets', 100] },
                        },
                        {
                          case: { $lte: ['$followersCount', 25000] },
                          then: { $multiply: ['$$totalTweets', 200] },
                        },
                        {
                          case: { $lte: ['$followersCount', 50000] },
                          then: { $multiply: ['$$totalTweets', 500] },
                        },
                        {
                          case: { $lte: ['$followersCount', 100000] },
                          then: { $multiply: ['$$totalTweets', 800] },
                        },
                        {
                          case: { $gt: ['$followersCount', 100000] },
                          then: { $multiply: ['$$totalTweets', 1000] },
                        },
                      ],
                      default: { $multiply: ['$$totalTweets', 100] }, // If none of the conditions match, default to 1x
                    },
                  },
                },
              },
            ],
          },
        },
      },
      {
        $sort: {
          totalBaePoints: -1,
          createdAt: 1,
        },
      },
      {
        $skip: (page - 1) * queryLimit,
      },
      {
        $limit: queryLimit,
      },
    ]);

    users.forEach((user, index) => {
      user.rank = (page - 1) * queryLimit + index + 1;
    });

    const hasMore = Boolean(users.length >= limit);

    const currentUserTotalBaePoints =
      req.user.totalBaePoints + (req.user.userAuth?.farmData?.totalTweets || 0);

    const currentUserRankAggregate = await User.aggregate([
      {
        $lookup: {
          from: 'userauths', // Assuming the name of the collection is "userAuth"
          localField: '_id',
          foreignField: 'userId',
          as: 'userAuthData',
        },
      },
      {
        $unwind: {
          path: '$userAuthData',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          totalBaePoints: {
            $add: [
              { $multiply: ['$totalPoint', '$multiplier'] },
              {
                $let: {
                  vars: {
                    totalTweets: {
                      $ifNull: [
                        {
                          $sum: {
                            $ifNull: [
                              {
                                $ifNull: [
                                  '$userAuthData.farmData.totalTweets',
                                  0,
                                ],
                              },
                              0,
                            ],
                          },
                        },
                        0,
                      ],
                    },
                  },
                  in: {
                    $switch: {
                      branches: [
                        {
                          case: { $lte: ['$followersCount', 10000] },
                          then: { $multiply: ['$$totalTweets', 100] },
                        },
                        {
                          case: { $lte: ['$followersCount', 25000] },
                          then: { $multiply: ['$$totalTweets', 200] },
                        },
                        {
                          case: { $lte: ['$followersCount', 50000] },
                          then: { $multiply: ['$$totalTweets', 500] },
                        },
                        {
                          case: { $lte: ['$followersCount', 100000] },
                          then: { $multiply: ['$$totalTweets', 800] },
                        },
                        {
                          case: { $gt: ['$followersCount', 100000] },
                          then: { $multiply: ['$$totalTweets', 1000] },
                        },
                      ],
                      default: { $multiply: ['$$totalTweets', 100] }, // If none of the conditions match, default to 1x
                    },
                  },
                },
              },
            ],
          },
        },
      },
      {
        $match: {
          $or: [
            {
              totalBaePoints: {
                $gt: currentUserTotalBaePoints,
              },
            },
            {
              $and: [
                { totalBaePoints: currentUserTotalBaePoints },
                { createdAt: { $lt: req.user.createdAt } },
              ],
            },
          ],
        },
      },
      {
        $count: 'currentUserRank',
      },
    ]);

    const currentUserRank =
      currentUserRankAggregate.length > 0
        ? currentUserRankAggregate[0].currentUserRank + 1
        : 1;

    const result = {
      metadata: { nextPage: +page + 1, hasMore },
      users,
      userRank: currentUserRank,
    };

    return res.json({
      statusCode: 200,
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      success: false,
      message: error.message || 'Failed to get invitees',
    });
  }
});

router.get('/public/leaderboard', async (req, res) => {
  try {
    const { page = 1, limit: queryLimit = 40 } = req.query;

    const limit = +queryLimit;

    const users = await User.aggregate([
      {
        $lookup: {
          from: 'userauths', // Assuming the name of the collection is "userAuth"
          localField: '_id',
          foreignField: 'userId',
          as: 'userAuthData',
        },
      },
      {
        $unwind: {
          path: '$userAuthData',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          totalBaePoints: {
            $add: [
              { $multiply: ['$totalPoint', '$multiplier'] },
              {
                $let: {
                  vars: {
                    totalTweets: {
                      $ifNull: [
                        {
                          $sum: {
                            $ifNull: [
                              {
                                $ifNull: [
                                  '$userAuthData.farmData.totalTweets',
                                  0,
                                ],
                              },
                              0,
                            ],
                          },
                        },
                        0,
                      ],
                    },
                  },
                  in: {
                    $switch: {
                      branches: [
                        {
                          case: { $lte: ['$followersCount', 10000] },
                          then: { $multiply: ['$$totalTweets', 100] },
                        },
                        {
                          case: { $lte: ['$followersCount', 25000] },
                          then: { $multiply: ['$$totalTweets', 200] },
                        },
                        {
                          case: { $lte: ['$followersCount', 50000] },
                          then: { $multiply: ['$$totalTweets', 500] },
                        },
                        {
                          case: { $lte: ['$followersCount', 100000] },
                          then: { $multiply: ['$$totalTweets', 800] },
                        },
                        {
                          case: { $gt: ['$followersCount', 100000] },
                          then: { $multiply: ['$$totalTweets', 1000] },
                        },
                      ],
                      default: { $multiply: ['$$totalTweets', 100] }, // If none of the conditions match, default to 1x
                    },
                  },
                },
              },
            ],
          },
        },
      },
      {
        $sort: {
          totalBaePoints: -1,
          createdAt: 1,
        },
      },
      {
        $skip: (page - 1) * queryLimit,
      },
      {
        $limit: queryLimit,
      },
    ]);

    users.forEach((user, index) => {
      user.rank = (page - 1) * queryLimit + index + 1;
    });

    const hasMore = Boolean(users.length >= limit);

    const result = {
      metadata: { nextPage: +page + 1, hasMore },
      users,
    };

    return res.json({
      statusCode: 200,
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      success: false,
      message: error.message || 'Failed to get invitees',
    });
  }
});
// router.get('/leaderboard', async (req, res) => {
//   try {
//     // cursor based pagination is causing issues with getting the data
//     // page number based pagination will work well here
//     const { page = 1, limit: queryLimit = 40 } = req.query;

//     if (!req.user) {
//       return res.redirect('/join');
//     }

//     const limit = +queryLimit;

//     const users = await User.aggregate([
//       {
//         $addFields: {
//           totalBaePoints: { $multiply: ['$totalPoint', '$multiplier'] }, // Calculate totalPointBae field by multiplying totalPoint with bae
//         },
//       },
//       {
//         $sort: {
//           totalBaePoints: -1, // Sort by totalBaePoints in descending order
//           createdAt: 1, // Then by createdAt in ascending order
//         },
//       },
//       {
//         $skip: (page - 1) * queryLimit, // Skip documents based on page and queryLimit
//       },
//       {
//         $limit: queryLimit, // Limit the number of documents returned
//       },
//     ]);

//     users.forEach((user, index) => {
//       user.rank = (page - 1) * queryLimit + index + 1;
//     });

//     // Check whether the extra document mentioned above exists
//     const hasMore = Boolean(users.length >= limit);

//     // Build an array without the extra document by removing the next cursor
//     let nextPage = null;
//     if (hasMore) {
//       nextPage = page + 1;
//     }

//     const currentUserTotalBaePoints = req.user.totalBaePoints;

//     const currentUserRankAggregate = await User.aggregate([
//       {
//         $addFields: {
//           totalBaePoints: { $multiply: ['$totalPoint', '$multiplier'] }, // Calculate totalPointBae field by multiplying totalPoint with bae
//         },
//       },
//       {
//         $match: {
//           $or: [
//             {
//               totalBaePoints: {
//                 $gt: currentUserTotalBaePoints,
//               },
//             },
//             {
//               $and: [
//                 { totalBaePoints: currentUserTotalBaePoints },
//                 { createdAt: { $lt: req.user.createdAt } },
//               ],
//             },
//           ],
//         },
//       },
//       {
//         $count: 'currentUserRank',
//       },
//     ]);

//     // Extracting currentUserRank from the aggregate result
//     const currentUserRank =
//       currentUserRankAggregate.length > 0
//         ? currentUserRankAggregate[0].currentUserRank + 1
//         : 1;

//     const result = {
//       metadata: { nextPage: +page + 1, hasMore },
//       users,
//       userRank: currentUserRank,
//     };

//     return res.json({
//       statusCode: 200,
//       success: true,
//       data: result,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       statusCode: 400,
//       success: false,
//       message: error.message || 'Failed to get invitees',
//     });
//   }
// });

export default router;

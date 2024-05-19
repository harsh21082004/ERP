import { Router } from 'express';
import { isLoggedIn } from '../middlewares/auth.middleware.js';
import BaeData from '../models/baeData.model.js';
import User from '../models/user.model.js';

const router = Router();

router.get('/supporters', async (req, res) => {
  try {
    const { type = 'supporters' } = req.query;

    const { data: supportersData } = await BaeData.findOne({ type });

    const xUserNames = supportersData.map(({ username }) => username) || [];

    const filteredUsers = await User.find({
      screenName: {
        $in: xUserNames,
      },
      multiplier: {
        $eq: 1,
      },
    });

    // const updateUsers = await User.updateMany(
    //   {
    //     screenName: {
    //       $in: xUserNames,
    //     },
    //     multiplier: {
    //       $eq: 1,
    //     },
    //   },
    //   {
    //     $set: {
    //       multiplier: 2.5,
    //     },
    //   },
    //   {
    //     new: true,
    //   }
    // );

    return res.json({
      statusCode: 200,
      success: true,
      data: {
        filteredUsers,
      },
      data: {
        nSupporters: xUserNames.length,
        nFilteredUsers: filteredUsers.length,
      },
      // data: { updateUsers },
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      success: false,
      message: error.message || 'Failed to get data',
    });
  }
});

export default router;

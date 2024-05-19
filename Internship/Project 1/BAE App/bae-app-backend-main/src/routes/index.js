import { Router } from 'express';
import authRoute from './auth.route.js';
import userRoute from './user.route.js';
import userTwitterRoute from './userTwitter.route.js';
import baeDataRoute from './baeData.route.js';
import queryRoute from './query.route.js';

const router = Router();

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/user-twitter', userTwitterRoute);
router.use('/bae-data', baeDataRoute);
router.use('/query', queryRoute);

export default router;

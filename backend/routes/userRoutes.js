import express from 'express'
import { authUser, logoutUser } from '../controllers/userControllers.js';

const router = express.Router();

router.route('/login').post(authUser);
router.post('/logout', logoutUser);

export default router;
import express from 'express';

const router = express.Router();
import {
    signup,
    login,
    verify,
    logout,
    profile,
    resetPassword,
} from '../controllers/auth.controller.js';

router.post('/login', login);
router.post('/signup', signup);
router.post('/password/reset', resetPassword);
router.get('/profile', profile);
router.get('/verify', verify);
router.post('/logout', logout);

export default router;

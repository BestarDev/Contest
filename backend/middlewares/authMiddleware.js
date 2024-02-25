import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'

export const protect = asyncHandler(async(req, res) => {
    const token = req.cookies.jwt

    if(token) {
        try {
            const {userId} = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(userId).select("-password")
        } catch (err) {
            res.status(401);
            throw new Error('Not Authorized, token failed')
        }
    } else {
        res.status(401);
        throw new Error('Not Authorized, no token');
    }
})

export const admin = asyncHandler(async(req, res, next) => {
    if(req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not Authorized as Admin')
    }
})
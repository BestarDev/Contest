import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'
import { generateToken } from '../utils/generateToken.js';

// @ desc       Auth User
// @ route      POST /api/users/login
// @ access     Public
export const authUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        const {password, ...data} = user.toObject();
        res.status(200).json(data);
    } else {
        res.status(401);
        throw new Error('Invalid Email or Password');
    }
})

// @ desc       Logout User
// @ route      POST /api/users/logout
// @ access     Private
export const logoutUser = asyncHandler(async(req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({
        message: "Logout Successfully"
    })
})
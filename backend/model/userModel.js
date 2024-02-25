import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true,
        default: '/images/userDefault.jpg'
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    mark: {
        type: Number,
        default: 0,
        required: true
    },
    submit: {
        type: Number,
        required: true,
        default: 0
    },
    accept: {
        type: Number, 
        required: true,
        default: 0
    },
    attempts: [{
        problem: {type: mongoose.Types.ObjectId, ref:'Problem'},
        result: {type: String},
        time: {type: String}
    }],
    contests: [{
        contest: {type: mongoose.Types.ObjectId, ref: 'Contest'},
        points: {type: Number, default: 0}
    }],
    invite: [{
        type: mongoose.Types.ObjectId,
        ref: 'Contest'
    }]
}, {
    timestamps: true
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

/******************* Important ***************************/
/* userSchema.pre('save', async function(next)            |
     |-> userSchema.pre('validate', async function(next)  |
/*********************************************************/
userSchema.pre('validate', async function(next) {
    if (!this.isModified('password')) {
        return next();  // Return here to exit the function early if password is not modified
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        return next();  // Return after hashing the password
    } catch (error) {
        return next(error);  // Pass any error to the next middleware
    }
});

const User = mongoose.model("User", userSchema)

export default User;
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true,
        default: '/images/userDefault.png'
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

const User = mongoose.model("User", userSchema)

export default User;
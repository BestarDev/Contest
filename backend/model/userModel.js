import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true,
        default: '/images/userDefault.png'
    },
    submit: {
        type: Number,
        require: true,
        default: 0
    },
    accept: {
        type: Number, 
        require: true,
        default: 0
    },
    attempts: [{
        problem: {type: Schema.Types.ObjectId, ref:'Problem'},
        result: {type: String},
        time: {type: String}
    }],
    contests: [{
        contest: {type: Schema.Types.ObjectId, ref: 'Contest'},
        points: {type: Number, default: 0}
    }],
    mark: {
        type: Number,
        default: 0,
        require: true
    },
    invite: {
        type: String,
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

export default User;
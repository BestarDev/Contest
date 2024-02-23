import mongoose from "mongoose";

const contestSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    participants: [{
        user: {type: mongoose.Types.ObjectId, ref: 'User'},
        totalpoints: {type: Number, default: 0}
    }],
    problems:[{
        problem: {type: mongoose.Types.ObjectId, ref: 'Problem'},
        attempts: [{
            user: {type: mongoose.Types.ObjectId, ref: 'User'},
            points: {type: Number, default: 0},
            time: {type: String},
            description: {type: String}
        }]
    }],
    images: {
        type: String
    }
}, {
    timestamps: true
})

const Contest = mongoose.model("Contest", contestSchema);

export default Contest;
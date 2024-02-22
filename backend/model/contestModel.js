import mongoose, { Schema } from "mongoose";

const contestSchema = new mongoose.Schema({
    creator: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    title: {
        type: String,
        require: true
    },
    startDate: {
        type: String,
        require: true
    },
    endDate: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    participants: [{
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        totalpoints: {type: Number, default: 0}
    }],
    problems:[{
        problem: {type: Schema.Types.ObjectId, ref: 'Problem'},
        attempts: [{
            user: {type: Schema.Types.ObjectId, ref: 'User'},
            points: {type: Number, require: true, default: 0},
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
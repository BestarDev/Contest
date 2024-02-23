import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    input: {
        type: String,
        required: true
    },
    output: {
        type: String,
        required: true
    },
    timeLimit: {
        type: Number,
        required: true
    },
    memoryLimit: {
        type: Number,
        required: true
    },
    difficulty: {
        type: Number,
        required: true,
        default: 0
    },
    submit: {
        type: Number
    },
    accept: {
        type: Number
    },
    logs: [{
        coder: {type: mongoose.Types.ObjectId, ref: 'User'},
        time: {type: String},
        res: {type: String}
    }]
}, {
    timestamps: true
})

const Problem = mongoose.model('Problem', problemSchema)

export default Problem;
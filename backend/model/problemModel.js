import mongoose, { trusted } from "mongoose";

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    input: {
        type: String,
        require: true
    },
    output: {
        type: String,
        require: true
    },
    timeLimit: {
        type: Number,
        require: true
    },
    memoryLimit: {
        type: Number,
        require: true
    },
    submit: {
        type: Number
    },
    accept: {
        type: Number
    }
}, {
    timestamps: true
})

const Problem = mongoose.model('Problem', problemSchema)

export default Problem;
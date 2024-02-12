import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    toDo: {
        type: String,
        required: true,
    },
});

export const TodoModel = mongoose.model('Task', todoSchema);












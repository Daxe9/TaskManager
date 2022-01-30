const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: [50, "Name must not be more than 50 characters"],
        required: [true, "Must provide a name"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

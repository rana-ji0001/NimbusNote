const mongoose = require ('mongoose');

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    tag: {
        type: String,
        default: "general",
    },
    date: {
        type: Date,
        default: Date.now,
    },

});
const Notes = mongoose.model("notes", notesSchema);

module.exports = Notes;
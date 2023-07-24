const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
    title: String,  // S is capital
    body: String,   // S is capital
});

const Template = mongoose.model("note", templateSchema);

module.exports = Template; 
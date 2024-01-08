const mongoose = require("mongoose");

const StuSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    young: Number,
    middle: Number,
    Teacher: Number,
    dateTic: { type: Date, default: Date.now, },
},
    { timestamps: { updatedAt: "updated", createdAt: "created", } }
);

const StuModel = mongoose.model("Student", StuSchema);
module.exports = StuModel;

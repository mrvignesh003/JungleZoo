const mongoose = require("mongoose");

const ExpSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    adultticket: Number,
    childticket: Number,
    Senior: Number,
    Online: Number,
    dateTic: { type: Date, default: Date.now, },
},
    { timestamps: { updatedAt: "updated", createdAt: "created", } }
);

const ExpModel = mongoose.model("Explore", ExpSchema);
module.exports = ExpModel;

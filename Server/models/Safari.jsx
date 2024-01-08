const mongoose = require("mongoose");

const SafriSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    adultticket: Number,
    childticket: Number,
    dateTic: { type: Date, default: Date.now, },
},
    { timestamps: { updatedAt: "updated", createdAt: "created", } }
);

const SafriModel = mongoose.model("Safri", SafriSchema);
module.exports = SafriModel;

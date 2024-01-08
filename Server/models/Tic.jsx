const mongoose = require("mongoose");

const TicSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    adultticket: Number,
    childticket: Number,
    dateTic: { type: Date, default: Date.now, },
},
    { timestamps: { updatedAt: "updated", createdAt: "created", } }
);

const TicModel = mongoose.model("Tics", TicSchema);
module.exports = TicModel;

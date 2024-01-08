const mongoose = require("mongoose");

const DonateSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    Address: String,
    city: String,
    Payment: String,
    state: String,
    country: String,
    SpecialInstruction: String,
    Payment: { type: String, default: "Cash On Delivery", },
    status: { type: String, default: "Pending", },
    dateOrder: { type: Date, default: Date.now, },
},
    { timestamps: { updatedAt: "updated", createdAt: "created", } }
);

const DonateModel = mongoose.model("Donation", DonateSchema);
module.exports = DonateModel;

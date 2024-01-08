const mongoose = require("mongoose");

const VehicleticSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    cycleticket: Number,
    Twowheelerticket: Number,
    carticket: Number,
    minibusticket: Number,
    busticket: Number,
    dateTic: { type: Date, default: Date.now, },
},
    { timestamps: { updatedAt: "updated", createdAt: "created", } }
);

const VehicleticModel = mongoose.model("Vehicletics", VehicleticSchema);
module.exports = VehicleticModel;
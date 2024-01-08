const mongoose = require("mongoose");

const EquipeSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    VideoCamera: Number,
    Camera: Number,
    Luggage: Number,
    dateTic: { type: Date, default: Date.now, },
},
    { timestamps: { updatedAt: "updated", createdAt: "created", } }
);

const EquipModel = mongoose.model("Equip", EquipeSchema);
module.exports = EquipModel;

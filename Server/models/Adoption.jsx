const mongoose = require("mongoose");

const AdoptionSchema = new mongoose.Schema({
  title: String,
  price: String,
  categories: String,
},
  {timestamps:true}
);

const AdoptionModel = mongoose.model("Adoption", AdoptionSchema);
module.exports = AdoptionModel;

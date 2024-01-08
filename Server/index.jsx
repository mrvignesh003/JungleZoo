require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/users.jsx");
const routes = require('./router/user.jsx');
const Adoption = require('./router/Adoption.jsx');
const Order =require('./router/Order.jsx');
const OrderModel =require('./models/Order.jsx');
const ticket =require('./router/Tic.jsx');
const ticmmodel =require('./models/Tic.jsx')
const vehimodel =require('./models/Vehicletic.jsx')
const vehirou =require('./router/Vehicletic.jsx')
const SafriModel =require('./models/Safari.jsx')
const Safri =require('./router/Safari.jsx')
const EquipModel =require('./models/Equipment.jsx')
const Equip =require('./router/Equipment.jsx')
const ExpModel =require('./models/Explore.jsx')
const Explore =require('./router/Explore.jsx')
const StuModel =require('./models/Student.jsx')
const Student =require('./router/Student.jsx')
const DonateModel =require('./models/Donation.jsx')
const Donate =require('./router/Donation.jsx')
//middle ware
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use('/api/Adoption', Adoption);
app.use('/api/order',Order);
app.use('/api/tic',ticket);
app.use('/api/vehicletic',vehirou);
app.use('/api/safri',Safri);
app.use('/api/equip',Equip);
app.use('/api/explore',Explore);
app.use('/api/student',Student);
app.use('/api/donate',Donate);

mongoose.connect("mongodb://127.0.0.1:27017/JungleZoo");

app.post("/users", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The Passwword is Incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.post("/Orders", (req, res) => {
  OrderModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.post("/Tics", (req, res) => {
  ticmmodel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.post("/Vehicletics", (req, res) => {
  vehimodel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.post("/Safri", (req, res) => {
  SafriModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.post("/Equip", (req, res) => {
  EquipModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.post("/Explore", (req, res) => {
  ExpModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.post("/Student", (req, res) => {
  StuModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.post("/Donation", (req, res) => {
  DonateModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});

const router = require('express').Router();
const Student = require('../models/Student.jsx');

//post
router.post("/", async (req, res) => {
    const newTic = new Student(req.body);

    try {
        const savedTic = await newTic.save();
        res.status(200).json(savedTic);
    } catch (err) {
        res.status(500).json(err);
    }
});
//get
router.get("/:id", async (req, res) => {
    try {
        const Tics = await Student.find({ userId: req.params.userId });
        res.status(200).json(Tics);
    } catch (err) {
        res.status(500).json(err);
    }
});
//get all
router.get("/all", async (req, res) => {
    try {
        const Tics = await Student.find();
        res.status(200).json(Tics);
    } catch (err) {
        res.status(500).json(err);
    }
});
//update
router.put("/:id", async (req, res) => {
    try {
      const updatedTic = await Student.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedTic);
    } catch (err) {
      res.status(500).json(err);
    }
  });
//delete
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Student.findByIdAndDelete(req.params.id)
        if (!deleted) {
            return res.status(404).json({ message: 'Product not found' })
        }
        return res.status(200).json(deleted)
    } catch (error) {
        return res.status(500).json({ ...error })
    }
});

module.exports = router;
const router = require('express').Router();
const Adoption = require('../models/Adoption.jsx');

//createNew
router.post('/create/new', async (req, res) => {
    const newAdoption = new Adoption(req.body);

    try {
        const saveAdoption = await newAdoption.save();
        res.status(200).json(saveAdoption)
    } catch {
        res.status(500).json(err)
    }
});

//GetAll
router.get('/all', async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let Adoptions;
        if (qNew) {
            Adoptions = await Adoption.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            Adoptions = await Adoption.find({
                categories: {
                    $in: [qCategory],
                },
            })
        } else {
            Adoptions = Adoption.find();
        }
        res.status(200).json(Adoptions);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update
router.put('/:id', async (req, res) => {
    try {
        const updatedAdoption = await Adoption.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedAdoption);
    } catch (err) {
        res.status(500).json(err);
    }
});


//delete
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Adoption.findByIdAndDelete(req.params.id)
        if (!deleted) {
            return res.status(404).json({ message: 'Adoption not found' })
        }
        return res.status(200).json(deleted)
    } catch (error) {
        return res.status(500).json({ ...error })
    }
});

module.exports = router;
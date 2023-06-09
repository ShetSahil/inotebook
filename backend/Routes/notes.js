const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');




//ROUTE:1= Fetching all notes
router.get('/fetchnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal errorr");
    }
})

//Router2: Insert the notes
router.post('/addnotes', fetchuser, [
    body('title', 'Enter valid Title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters').isLength({ min: 5 }),


], async (req, res) => {
    //if errors,return bad errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const note = new Note({
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            user: req.user.id
        })
        const savednote = await note.save();
        res.json(savednote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

//Route 3: update note of logged in user

router.put('/updatenotes/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route 4 : Delete note
router.delete('/deletenotes/:id', fetchuser, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success":"Note has been removed"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router

const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const {body, validationResult } = require('express-validator');



  
// get all the notes of that particular user using req api/notes/fetchallnotes :: login required
router.get("/fetchallnotes" ,fetchuser, async (req,res) => {
    try {
    const notes = await Notes.find({user:req.user.id});
    res.json(notes);
    } catch (error) {
        console.log(error.message);
            res.status(500).send("Itnernal server error");
        
    }
})
// add a new note using post :: login required
router.post("/addnote" ,fetchuser,[
    body('title','enter a valid title').isLength({min:3}),
    body('description','description must be atleast of five characters').isLength({min:5})
], async (req,res) => {
    try {
    const {title,description,tag} = req.body;
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({result:result.array()});
    }
    const note = new Notes({
        title,description,tag,user:req.user.id,
    });
    const savedNotes = await note.save();

    res.json(savedNotes);
    } catch (error) {
            console.log(error.message);
            res.status(500).send("Itnernal server error");
    }
})
module.exports = router
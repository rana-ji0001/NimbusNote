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
});


//update an existing note using POST : //api/notes/updatenote , login required;
router.put("/updatenote/:id" ,fetchuser, async (req,res) => {
    const {title,description,tag} = req.body;
    const newNote = {};
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};
    
    //find the user which needs update and then update it
    let note =  await Notes.findById(req.params.id);

    if(!note){
        return res.status(404).send("Not Found");
    }
    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndUpdate(req.params.id , {$set:newNote} ,{new:true});
    res.json({note});





})
module.exports = router
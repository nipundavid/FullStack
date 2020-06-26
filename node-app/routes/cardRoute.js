const express = require("express");
const router = express.Router();
const Card = require("../model/data");

// Gets all the posts
// router.get("/", async (req, res) => {
//     res.send("What the hell");
//     try {
//         const cards = await Card.find();
//         res.json(cards);
//     } catch (err) {
//         res.json({
//             message: err
//         });
//     }
// });

// Gets all the cards
router.get('/', async (req, res) => {
    console.log("All Cards Requested")
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (err) {
        res.json({
            message: err
        });
    }
});


// Specific card
router.get("/:cardId", async (req, res) => {
    console.log("Specific Card Requested")
    try {
        const card = await Card.findById(req.params.cardId);
        res.json(card);
    } catch (err) {
        res.json({
            message: err
        });
    }
})



// subimit a post : To-DO
router.post("/", async (req, res) => {
    const post = new Card({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});




module.exports = router;
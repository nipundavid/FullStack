const express = require("express");
const router = express.Router();

// Gets all the posts
router.get('/', (req, res) => {
    // We will be coding here
    res.send("Thi is sparta from get");
});


module.exports = router;
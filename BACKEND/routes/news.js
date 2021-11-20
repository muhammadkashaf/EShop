const fs = require('fs');
const express = require("express");
const router = express.Router();
const { News } = require('../models/news');

let newsData = fs.readFileSync('./test.json');
let news = JSON.parse(newsData);

router.post(`/`, async (req, res) => {

    await News.insertMany(news).then(() => {
        res.status(200).send({ message: 'Inserted Succesfully' })

    }).catch((error) => {
        res.status(500).send({ message: error })
    })
})

module.exports = router;
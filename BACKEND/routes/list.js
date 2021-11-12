const data = require("../test.json");
const express = require("express");
const router = express.Router();


router.get(`/`, async (req, res) => {
    let total = 0;
    let totalPositive = 0;
    let totalNegative = 0;
    let totalNeutral = 0;

    const groups = data.data.reduce((groups, item) => {
        const letterKey = item.sentiment.charAt(2).toLowerCase();
        (groups[letterKey] || (groups[letterKey] = [])).push(item);
        Object.entries(groups).sort().map(([letterKey, items]) => {
            switch (letterKey) {
                case 's':
                    totalPositive += 1;
                    total += 1;
                    break;
                case 'g':
                    totalNegative += 1;
                    total += 1;
                    break;
                case 'u':
                    totalNeutral += 1;
                    total += 1;
                    break;
                default:
                    break;
            }
        })
        const body = {
            total,
            totalPositive,
            totalNegative,
            totalNeutral
        }
        return body

    });
    res.send(groups)
   
})


module.exports = router;



const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.json({bulldog:"Skadi"})
})

// router.delete("/:id", (req, res)=>{
//     console.log(req.params.id)
// })

module.exports = router
const express = require('express')
const app = express()

app.route('/')
.get(function (req,res) {
    res.send('gg')
})

const PORT = process.env.PORT || 4000

app.listen(PORT , ()=> console.log(`urn at port ${PORT}`))

module.exports = app
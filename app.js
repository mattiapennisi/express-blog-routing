const express = require('express')
const app = express()
const port = 3000

const posts = require('posts.js')

app.listen(port, () => {
    console.log('Server is running');
})

app.get('/', (req, res) => {
    res.send('Server index')
})
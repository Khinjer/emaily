const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.json({
        message: "Testing build"
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,  ()=>{
    console.log(`Listening on port ${PORT}...`);
})
const express = require('express')
const app = express()
const PORT = 3000
/*
    / = root folder
    ./ = current folder
    ../ = back a folder
*/
const pokemon = require("./models/pokemon.js")

app.get('/', (req,res)=>{
    res.send("Welcome to Pokemon App!")
})
/*
    app.get(<ENDPOINT>, <MIDDLEWARE FUNCTION>)

    function(){}
    ()=>{}
*/
app.get('/pokemon', (req,res)=>{
    res.send(pokemon)
})



app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}. http://localhost:${PORT}/`);
});
const express = require('express')
const jsx = require('jsx-view-engine')
const app = express()
const PORT = 3000
/*
    / = root folder
    ./ = current folder
    ../ = back a folder
*/
const pokemon = require("./models/pokemon.js")

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', jsx())

app.get('/', (req,res)=>{
    res.send("Welcome to Pokemon App!")
})
/*
    app.get(<ENDPOINT>, <MIDDLEWARE FUNCTION>)

    function(){}
    ()=>{}
*/
app.get('/pokemon', (req,res)=>{
    res.render('Index.jsx', {pokemon})
}) 

app.get('/pokemon/:id', (req, res) => {
    res.render('Show.jsx', {
        pokemon: pokemon[req.params.id]
    })
})



app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}. http://localhost:${PORT}/`);
});
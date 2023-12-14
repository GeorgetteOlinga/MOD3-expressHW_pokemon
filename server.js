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

// gets data from an HTML form
app.use(express.urlencoded({ extended: false }))

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

app.get('/pokemon/new', (req, res) => {
    // Blastoise
    // https://www.nme.com/wp-content/uploads/2021/01/blastoise@2000x1270
    res.render('New.jsx')
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show.jsx', {
        pokemon: pokemon[req.params.id]
    })
})

app.post('/pokemon/new', (req, res) =>{
    pokemon.push(req.body)
    res.redirect('/pokemon')
})



app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}. http://localhost:${PORT}/`);
});
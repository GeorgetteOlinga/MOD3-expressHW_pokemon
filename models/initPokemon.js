require('dotenv').config()
const {MONGO_URI} = process.env
const mongoose = require('mongoose')
const pokemon = require('./pokemon.js')
const Pokemon = require('./PokemonModel.js')

mongoose.connect(MONGO_URI).then(()=>{
    pokemon.forEach(async p => {
        const newPokemon = new Pokemon(p)
        newPokemon.save()
    })
})

// node models/initPokemon.js
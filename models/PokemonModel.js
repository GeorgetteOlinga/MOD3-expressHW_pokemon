const {Schema, model} = require('mongoose')

const PokemonSchema = {
    name: String,
    img: String
}

const Pokemon = model('pokemon', PokemonSchema, 'pokemon')

module.exports = Pokemon
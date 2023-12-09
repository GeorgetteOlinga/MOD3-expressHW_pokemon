const React = require('react')

function capitalize(str) {
    return str[0].toUpperCase()+str.slice(1)
}

function Show({ pokemon }) {
    return (
        <>
            <div className="shown-pokemon">
                <h3>{capitalize(pokemon.name)}</h3>
                <img src={pokemon.img} alt={`Picture of ${pokemon.name}`} />
            </div>
        </>
    )
}

module.exports = Show
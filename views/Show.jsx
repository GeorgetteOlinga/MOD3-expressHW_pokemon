const React = require('react')

function capitalize(str) {
    return str[0].toUpperCase()+str.slice(1)
}

function Show({ pokemon }) {
    return (
        <>
            <h1>Gotta Catch 'Em All</h1>
            <div className="shown-pokemon">
                <h2>{capitalize(pokemon.name)}</h2>
                <img src={pokemon.img+'.jpg'} alt={`Picture of ${pokemon.name}`} />
                <br />
                <a href="/pokemon">back</a>
            </div>
        </>
    )
}

module.exports = Show
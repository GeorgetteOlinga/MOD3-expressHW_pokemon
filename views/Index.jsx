const React = require('react')

const h1Style = {
    color: 'green'
}

function Index({ pokemon }) {
    return (
        <>
            <h1 style={h1Style}>See All The Pokemon!</h1>
            <ul id="pokemon-list">
                {pokemon.map(p => (
                    <li>
                        <h3>{p.name}</h3>
                        <img src={p.img} alt="" />
                    </li>
                ))}
            </ul>
        </>
    )
}

module.exports = Index
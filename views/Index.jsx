const React = require('react')

const h1Style = {
    color: 'green'
}

function capitalize(str) {
    return str[0].toUpperCase()+str.slice(1)
}

function Index({ pokemon }) {
    return (
        <>
            <h1 style={h1Style}>See All The Pokemon!</h1>
            <a href="/pokemon/new">Add new pokemon</a>
            <ul id="pokemon-list">
                {pokemon.map((p, i) => (
                    <li key={p.name}>
                        <h3>{capitalize(p.name)}</h3>
                        <a href={`/pokemon/${i}`}>
                            Go to pokemon's page &#9658;
                        </a><br />
                        <img src={p.img+".jpg"} alt={`Picture of ${p.name}`} />
                    </li>
                ))}
            </ul>
        </>
    )
}

module.exports = Index
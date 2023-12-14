const React = require('react')

function New() {
    return (
        <>
            <a href="/pokemon">Go back home</a>
            <form action="/pokemon/new" method="POST">
                <div>
                    Name: <input type="text" name="name" />
                </div>
                <div>
                    Image URL: <input type="text" name="img" />
                </div>
                <button>
                    Submit
                </button>
            </form>
        </>
    )
}

module.exports = New
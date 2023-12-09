const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req,res)=>{
    res.send("Welcome to Pokemon App!")
})
/*
    app.get(<ENDPOINT>, <MIDDLEWARE FUNCTION>)

    function(){}
    ()=>{}
*/




app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}. http://localhost:${PORT}/`);
});
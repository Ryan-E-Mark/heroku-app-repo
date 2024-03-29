require('dotenv').config()

const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send(`<h1>Web ${process.env.COHORT} Rocks!</h1>`)
})

app.get('/port', (req, res) => {
    res.send(`<div>port is ${PORT}</div>`)
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})




function cohortRocks() {
    // console.log(process.argv);
    console.log(`web ${process.argv[2]} rocks`);
}

function cohortRocksEnv() {
    console.log(`home folder is ${process.env.HOME}`)
    console.log(`My shell is ${process.env.SHELL}`);
    console.log(`In my environment FOO is ${process.env.FOO}`)
}

cohortRocksEnv();
const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

app
    .use(express.static('public'))
    .set('view engine', 'ejs')

    //routes
    .get('/', (req, res) => {
        res.render('pages/overview')
    })
    .get('/:id', (req, res) => {
        res.render('pages/detail')
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
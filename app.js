const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const compression = require('compression');

const { dataTransformation } = require('./js/data/dataTransformation');
const { detailDataTransformation } = require('./js/data/detailDataTransformation');

app
    .use(express.static('public'))
    .use(compression())
    .set('view engine', 'ejs')

//routes
app.get('/offline', (req, res) => {
    res.render('pages/offline')
})

app.get('/', (req, res) => {
    dataTransformation()
        .then(response => {
            res.render('pages/overview', { data: response })
        });
})

app.get('/:id', (req, res) => {
    detailDataTransformation(req.params.id)
        .then(response => {
            res.render('pages/detail', { data: response })
        });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
const express = require('express');
const app = express();
const port = 3000;

const { dataTransformation } = require('./public/js/data/dataTransformation');
const { detailDataTransformation } = require('./public/js/data/detailDataTransformation');

app
    .use(express.static('public'))
    .set('view engine', 'ejs')

//routes
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
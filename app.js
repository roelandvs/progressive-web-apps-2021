const express = require('express');
const app = express();
const port = 3000;

const { dataTransformation } = require('./public/js/data/dataTransformation');

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
    res.render('pages/detail')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
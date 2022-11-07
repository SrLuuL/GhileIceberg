const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const topIcebergList = require('./data/top.json');
const secondIcebergList = require('./data/second.json');
const thirdIcebergList = require('./data/third.json');
const fourthIcebergList = require('./data/fourth.json');
const bottomIcebergList = require('./data/bottom.json');

app.get('/', (req, res) => {
    res.render('main', {
        topIcebergList,
        secondIcebergList,
        thirdIcebergList,
        fourthIcebergList,
        bottomIcebergList
    });
})

app.listen(PORT);
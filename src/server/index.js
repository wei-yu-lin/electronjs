const path = require('path');
const express = require('express');
const app = express();
const db = require('./db');
app.get('/api/getArticle', (req, res, next) => {
    res.json({
        data: '後臺返回結果 getArticle'
    })
})
// 監聽埠
app.listen(3000);
console.log('success listen at port:3000......');
const mysql = require('mysql');
const express = require('express');
const app = express();


const mysqlConfig = {
  host: 'localhost',  // 新建資料庫連線時的 主機名或ID地址 內容
  user: 'root',
  password: '0531', // root 密碼
  database: 'vue', // 資料庫名
  port: '3306'
}

const pool = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  port: mysqlConfig.port,
  multipleStatements: true    // 多語句查詢
});

var selectValue = function () {

  pool.getConnection((err, connection) => {
    if (err) {
      console.log("錯囉=",err)
      return
    }
    else {
      var sql = 'INSERT INTO `crud`(`coil_no`, `schd_no`, `entry_weight`, `entry_width`) VALUES ("98S123456","S558","1.23","4.56")'
      connection.query(sql, (err, result) => {
        console.log(result);
        connection.release();
      })
      // console.log(req.temp.input1)
    }
  })
}
app.listen(3000);
console.log("啟動完成");

app.get('/api/getArticle', (req, res, next) => {
  console.log(req.temp.input1)
  // selectValue()
})
// 監聽埠


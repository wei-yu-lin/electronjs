const mysql = require('mysql');
const express = require('express');
const app = express();


module.exports = {
  mysql:{
    host: 'localhost',  // 新建資料庫連線時的 主機名或ID地址 內容
    user: 'root',
    password: '0531', // root 密碼
    database: 'vue', // 資料庫名
    port: '3306'
  }
}



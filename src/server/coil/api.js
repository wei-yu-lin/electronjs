require('dotenv').config()
const mysql = require('mysql')
const sqlMap = require('./sqlMap')

const pool = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: process.env.mysql_host,
  user: process.env.mysql_user,
  password: process.env.mysql_password,
  database: process.env.mysql_database,
  port: process.env.mysql_port,
  multipleStatements: true // 多語句查詢
})

module.exports = {
  async getValue (req, res, next) {
    let sql = sqlMap.getValue
    await pool.getConnection((err, connection) => {
      if (err) {
        console.log('錯囉=', err)
      } else {
        connection.query(sql, (err, result) => {
          res.json(result)
          console.log('成功', result)
          connection.release()
        })
      }
    })
  },
  async setValue (req, res, next) {
    var coil_no = req.body.coil_no, steel_grade = req.body.steel_grade
    var entry_weight = req.body.entry_weight, entry_width = req.body.entry_width
    const connection1 = await odbc.connect('DSN=RDBCPS36;UID=yuCPS00;PWD=CPS111036A')
    connection1.query(`UPDATE ccap210m SET coil_number = "${coil_no}",steel_grade="${steel_grade}",entry_weight = "${entry_weight}",entry_width = "${entry_width}" WHERE COIL_NUMBER = "${coil_no}"`, (err, result) => {
      if (err) {
        console.log('錯誤' + err)
      } else {
        console.log('資料修改完成')
        res.json(result)
      }
    })
  },
  async insertValue (req, res, next) {
    var coil_no = req.body.coil_no, steel_grade = req.body.steel_grade
    var entry_weight = req.body.entry_weight, entry_width = req.body.entry_width
    let sql = sqlMap.insertValue
    await pool.getConnection((err, connection) => {
      if (err) {
        console.log('錯囉=', err)
      } else {
        connection.query(sql, [coil_no, steel_grade, entry_weight, entry_width], (err, result) => {
          res.json(result)
          console.log('資料新增完成')
          connection.release()
        })
      }
    })
  },
  async delete (req, res, next) {
    var coil_no = req.body.coil_no
    let sql = sqlMap.delete
    await pool.getConnection((err, connection) => {
      if (err) {
        console.log('錯囉=', err)
      } else {
        connection.query(sql, [coil_no], (err, result) => {
          console.log('資料刪除完成')
          res.json(result)
          connection.release()
        })
      }
    })
  }
}

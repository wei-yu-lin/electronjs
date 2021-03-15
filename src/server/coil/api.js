/* eslint-disable camelcase */
/* eslint-disable one-var */
/* eslint-disable handle-callback-err */
require('dotenv').config()
const sqlMap = require('./sqlMap')
const odbc = require('odbc')

module.exports = {
  async getValue (req, res, next) {
    let sql = sqlMap.getValue
    const connection1 = await odbc.connect('DSN=RDBCPS36;UID=yuCPS00;PWD=CPS111036A')
    connection1.query(sql, (error, result) => {
      if (error) {
        console.log(error)
      } else {
        res.json(result)
        console.log(result)
        connection1.close(error => { if (error) { } })
      }
    })
  },
  async updateValue (req, res, next) {
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
    const connection1 = await odbc.connect('DSN=RDBCPS36;UID=yuCPS00;PWD=CPS111036A')
    connection1.query(sql, [coil_no, steel_grade, entry_weight, entry_width], (err, result) => {
      if (err) {
        console.log('錯誤' + err)
      } else {
        console.log('資料新增完成')
        res.json(result)
      }
    })
  },
  async delete (req, res, next) {
    var coil_no = req.body.coil_no
    let sql = sqlMap.delete
    const connection1 = await odbc.connect('DSN=RDBCPS36;UID=yuCPS00;PWD=CPS111036A')
    connection1.query(sql, [coil_no], (err, result) => {
      if (err) {
        console.log('錯誤' + err)
      } else {
        console.log('資料刪除完成')
        res.json(result)
      }
    })
  }
}

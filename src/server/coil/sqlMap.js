var sqlMap = {
  getValue: 'SELECT coil_number,steel_grade,entry_weight,entry_width FROM ccap210m limit to 10 rows',
  insertValue: 'INSERT INTO ccap210m (coil_number, steel_grade, entry_weight,entry_width) VALUES (?,?,?,?)',
  delete: 'delete from ccap210m where coil_number=?'
}
module.exports = sqlMap

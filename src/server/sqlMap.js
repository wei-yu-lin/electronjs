var sqlMap = {
  getValue: 'SELECT coil_no,schd_no,entry_weight,entry_width FROM crud limit 10',
  insertValue: 'INSERT INTO crud (coil_no, schd_no, entry_weight,entry_width) VALUES (?,?,?,?)',
  delete: 'delete from crud where coil_no=?',
  login: 'select count(*) from userdata where username=?'
}
module.exports = sqlMap;

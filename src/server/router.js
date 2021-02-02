const express = require('express');
const router = express.Router();
const api = require('./api');
router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});
router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});
router.post('/insertValue', (req, res, next) => {
  api.insertValue(req, res, next);
});
router.post('/delete', (req, res, next) => {
  api.delete(req, res, next);
});
router.post('/signin', (req, res, next) => {
  api.signin(req, res, next);
});
module.exports = router;
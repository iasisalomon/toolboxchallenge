var express = require('express');
var router = express.Router();
const filesController = require('../controllers/filesController');

/* GET users listing. */
router.get('/', filesController.getFiles);
// router.get('/download', filesController.downloadFile);

module.exports = router;
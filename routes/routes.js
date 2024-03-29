const express = require('express');
const router = express.Router();
const {showAllData,createData } = require('../controller/controller');

router.get('/showDetails',showAllData);
router.post('/addingDetails',createData);
router.put('/editDetails');
router.delete('/destroyDetails');

module.exports = router
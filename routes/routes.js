const express = require('express');
const router = express.Router();
const {showAllData } = require('../controller/controller');

router.get('/showDetails',showAllData);
router.post('/addingDetails');
router.put('/editDetails');
router.delete('/destroyDetails');

module.exports = router
const express = require('express');
const router = express.Router();
const {showAllData,createData,editDataByid} = require('../controller/controller');

router.get('/showDetails',showAllData);
router.post('/addingDetails',createData);
router.put('/editDetails/:id',editDataByid);
router.delete('/destroyDetails');

module.exports = router
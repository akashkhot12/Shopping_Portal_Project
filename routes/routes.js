const express = require('express');
const router = express.Router();
const { showAllData, createData, editDataByid, deleteByID } = require('../controller/controller');

// All details show routes 
router.get('/showDetails', showAllData);

// adding details routes
router.post('/addingDetails', createData);

// Updating details routes
router.put('/editDetails/:id', editDataByid);

// Delete details routes 
router.delete('/destroyDetails', deleteByID);

module.exports = router
const express = require('express');
const router = express.Router();
const { showAllData, createData, editDataByid, deleteByID } = require('../controller/shopping.controller');

// All details show routes 
router.get('/details', showAllData);

// adding details routes
router.post('/add-details', createData);

// Updating details routes
router.put('/edit-detail/:id', editDataByid);

// Delete details routes 
router.delete('/delete-details/:id', deleteByID);

module.exports = router;
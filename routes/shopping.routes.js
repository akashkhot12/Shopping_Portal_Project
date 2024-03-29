const express = require('express');
const router = express.Router();
const { showAllData, createData, editDataByid, deleteByID, getById } = require('../controller/shopping.controller');

// All details show routes 
router.get('/details', showAllData);

// get by ID details routes
router.get('/details/:id',getById)

// adding details routes
router.post('/add-detail', createData);

// Updating details routes
router.put('/edit-detail/:id', editDataByid);

// Delete details routes 
router.delete('/delete-details/:id', deleteByID);

module.exports = router;
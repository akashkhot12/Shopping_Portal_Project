const express = require('express');
const { readAllTasks } = require('../controller/controller');
const router = express.Router();

router.get('/showDetails',readAllTasks);
router.post('/addingDetails');
router.put('/editDetails');
router.delete('/destroyDetails');

module.exports = router
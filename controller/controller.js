const express = require("express");
const app = express();
const Task = require("../model/model")

const readAllTasks = app.get('/' , async(req , res)=>{
    try {
        const tasks = await Task.find().toString();
        res.send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = {readAllTasks}
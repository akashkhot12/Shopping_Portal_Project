const shoppingPortal = require("../model/model");

// Create task
const createData = async(req,res)=>{
    try {
        const addData = new shoppingPortal(req.body);
        await addData.save();
        res.status(201).send(addData);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Read all tasks.
const showAllData = async(req,res)=>{
    try {
        let showData = await shoppingPortal.find();
        res.status(201).json(showData);
    } catch (error) {
        res.status(500).send(error);
    } 
}





module.exports = {showAllData,createData}


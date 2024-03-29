const shoppingPortal = require("../model/model");

// Create task
const createData = async(req,res)=>{
    try {
        const addData = new shoppingPortal(req.body);
        await addData.save();
        res.status(201).json({message:"data insert successfully",addData});
    } catch (error) {
        res.status(400).json({message:error});
    }
}

// Read all tasks.
const showAllData = async(req,res)=>{
    try {
        let showData = await shoppingPortal.find();
        res.status(201).json(showData);
    } catch (error) {
        res.status(500).json({message:error});
    } 
}

// update data 
const editDataByid =  async(req,res)=>{
    try {
        const editData = await shoppingPortal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!editData) {
            return res.status(404).json({message:"Something went wrong"});
        }
        res.json({message:"update data successfully",editData});
    } catch (error) {
        res.status(400).json({message:error});
    }
}

const deleteByID = async(req,res)=>{
    try {
        const deleteData = await shoppingPortal.findByIdAndDelete(req.params.id);
        if (!deleteData) {
            return res.status(404).send();
        }
        res.send(deleteData);
    } catch (error) {
        res.status(500).send(error);
    }
}









module.exports = {showAllData,createData,editDataByid}


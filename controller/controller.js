const shoppingPortal = require("../model/model");

// Create task
const createData = async (req, res) => {
    try {
        const addData = new shoppingPortal(req.body);
        await addData.save();
        res.status(201).json({ message: "Data insert successfully", addData });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

// Read all tasks.
const showAllData = async (req, res) => {
    try {
        let showData = await shoppingPortal.find();
        if (!showData) {
            return res.status(404).json({ message: "Resource not found" });
        }
        res.status(200).json(showData);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Update task 
const editDataByid = async (req, res) => {
    try {
        const editData = await shoppingPortal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!editData) {
            return res.status(404).json({ message: "Resource not found" });
        }
        res.status(201).json({ message: "Update data successfully", editData });
    } catch (error) {
        res.status(400).json({ message: "Invalid input", error });
    }
}

// Delete task
const deleteByID = async (req, res) => {
    try {
        const deleteData = await shoppingPortal.findByIdAndDelete(req.params.id);
        if (!deleteData) {
            return res.status(404).json({ message: "Resource not found" });
        }
        res.status(201).json({ message: "Delete data successfully", editData });
    } catch (error) {
        res.status(500).json({ message: "" });
    }
}

module.exports = { showAllData, createData, editDataByid, deleteByID }


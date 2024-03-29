const shoppingPortal = require("../model/model");

const showAllData = async(req,res)=>{
    let result = await shoppingPortal.find();
    res.status(201).json(result);
    res.send(result)
}

const 

module.exports = {showAllData}
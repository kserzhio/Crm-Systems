const Category = require('../models/Category')
const Position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')
module.exports.getAll = async function (req,res) {
    try {
        const categories = await Category.find({user:req.user.id})
        res.status(200).json(categories)
    }catch (e) {
        errorHandler(res,e)
    }
}
module.exports.getById = async function (req,res) {
    try {
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)
    }catch (e) {
        errorHandler(res,e)
    }
}
module.exports.remove = async function (req,res) {
        try {
            await Category.remove({_id:req.params.id})
            await Position.remove({category:req.params.id})
            res.status(200).json({
                message:'Remove position'
            })
        }catch (e) {
            errorHandler(res,e)
        }
}
module.exports.create = async function (req,res) {
    const category = new Category({
        name:req.body.name,
        user:req.user.id,
        imgSrc:req.file.path
    })
    try {
        await category.save()
        res.status(201).json(category)
    }catch (e) {
        errorHandler(res,e)
    }
}
module.exports.update = async function (req,res) {
    const update = {
        name:req.body.name
    }
    if(req)
    try {
        const category = await Category.findAndUpdate(
            {_id:req.params.id},
            {$set:update},
            {new:true}
            )
        res.status(200).json(category)
    }catch (e) {
        errorHandler(res,e)
    }
}

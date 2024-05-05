const Brand = require("../model/Brand.model")

module.exports.brandControllers = {
    //Добавление категории
createBrand: async(req,res)=>{
    try {
        const data = await Brand.create({
          title: req.body.title,
          image: req.body.image
        })
        return res.json(data)
        console.log(data);
    } catch (error) {
        res.json(error)
    }
},
// Просмотр категории
getBrand: async (req,res)=>{
    try {
        const data = await Brand.find()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
}
}

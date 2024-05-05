const Auto = require("../model/Auto.model");

module.exports.autoControllers = {
  //Добаление авто
  createAuto: async (req, res) => {
    const change = req.body;
    try {
      const data = await Auto.create({
        image: change.image,
        brand: change.brand,
        model: change.model,
        year: change.year,
        color: change.color,
        seats: change.seats,
        gearBox: change.gearBox,
        drive: change.drive,
        engine: change.engine,
        fuel: change.fuel,
        price: change.price,
        inStock: change.inStock,
        rating: change.rating,
      });
      return res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  patchAuto: async (req, res) => {
    try {
      const data = await Auto.findByIdAndUpdate(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deleteAuto: async (req, res) => {
    try {
      const data = await Auto.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getAuto: async (req, res) => {
    try {
      const data = await Auto.find().populate("brand");
      res.json(data);
    } catch (error) {
        res.json(error)
    }
  },
  getOneAuto: async(req,res)=>{
    try {
        const data = await Auto.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
  }
};

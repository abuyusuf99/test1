const { Router } = require("express");
const { brandControllers } = require("../controllers/brand.controller");
const router = Router();

router.post("/brand", brandControllers.createBrand);
router.get("/brand", brandControllers.getBrand);

module.exports = router;

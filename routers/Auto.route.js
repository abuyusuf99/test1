const { Router } = require("express");
const { autoControllers } = require("../controllers/auto.controllers");
const router = Router();

router.post("/auto", autoControllers.createAuto);
router.get("/auto", autoControllers.getAuto);
router.delete("/auto/:id", autoControllers.deleteAuto);
router.get("/auto/:id", autoControllers.getOneAuto);
router.patch("/auto/:id", autoControllers.patchAuto);
module.exports = router;

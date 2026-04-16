const express = require("express");
const router = express.Router();
const controller = require("../controllers/countries.controller");

router.get("/", controller.getAllCountries);
router.get("/:code", controller.getCountryByCode);
router.get("/search", controller.getCountryByName);
router.get("/distance", controller.getDistance);

module.exports = router;
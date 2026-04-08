const express = require("express");
const router = express.Router();

const controller = require("../controllers/sensoresController");

// rotas
router.post("/", controller.inserirDados);
router.get("/", controller.buscarDados);

module.exports = router;

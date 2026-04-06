const express = require("express");
const router = express.Router();

const controller = require("../controllers/sensoresController");

// rotas
router.post("/dados", controller.inserirDados);
router.get("/dados", controller.buscarDados);

module.exports = router;

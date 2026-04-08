const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// importar rotas
const sensoresRoutes = require("./routes/sensores.route");

// usar rotas
app.use("/dados", sensoresRoutes);

// iniciar servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const sensoresRoutes = require("./routes/sensores.route");

app.use("/dados", sensoresRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

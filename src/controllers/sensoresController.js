const database = require("../config/database");

// 📥 Inserir dados
exports.inserirDados = (req, res) => {
  const { nivel_lixo, temperatura } = req.body;

  const sql = "INSERT INTO sensores (nivel_lixo, temperatura) VALUES (?, ?)";

  database.query(sql, [nivel_lixo, temperatura], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao inserir dados");
    } else {
      res.send("Dados inseridos com sucesso");
    }
  });
};

// 📤 Buscar dados
exports.buscarDados = (req, res) => {
  const sql = "SELECT * FROM sensores ORDER BY id DESC";

  database.query(sql, (err, results) => {
    if (err) {
      console.error(err); // log pra debug
      return res.status(500).json({ erro: "Erro ao buscar dados" });
    }

    const dados = results.map((row) => ({
      id: row.id,
      nivelLixo: row.nivel_lixo,
      temperatura: row.temperatura,
      dataHora: row.data_hora,
    }));

    res.json(dados);
  });
};

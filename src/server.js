const express  = require("express");
const routes = require("./routes");
const database = require("./database");

const app = express();
app.use(express.json());
app.use(routes);
database.connect();

app.get("/", (request, response) => {
    response.send("Servidor funcionando com sucesso");
});

app.listen(3333, () => console.log ("Servidor rodando 3333"));




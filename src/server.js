const express  = require("express");
const routes= require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

app.get("/", (request, response) => {
    response.send("Servidor funcionando com sucesso");
});

app.listen(3333, () => console.log ("Servidor rodando 3333"));




import express from "express"
import cors from "cors"
import env from "dotenv"

env.config(); // Inicializando .env

cors(); // Configurando cors

const app = express();
const port = 8080; // Porta para os servidor

app.use(express.json()); // Definindo JSON para o sistema.

app.use(); // Pagina incial;


app.listen(port, (err)=>{
    if(err){
        console.log("Erro ao inicializar o servidor!")
    }
    console.log(`Servidor rodando em: http://localhost:${port}`);
});
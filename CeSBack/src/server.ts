import express from "express"
import cors from "cors"
import env from "dotenv"
env.config(); // Inicializando .env

import rt_pix from "./routes/rt_pagamento_pix"

const app = express();
const port = 8080; // Porta para os servidor
app.use(cors()); // Configurando cors)
app.use(express.json()); // Definindo JSON para o sistema.

app.use("/pix", rt_pix); // Pagina pagmento Pix;


app.listen(port, (err)=>{
    if(err){
        console.log("Erro ao inicializar o servidor!")
    }
    console.log(`Servidor rodando em: http://localhost:${port}`);
});
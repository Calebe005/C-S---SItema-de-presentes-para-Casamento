import { somaTotal } from "./controllers/controller.somaTotal.js";
import pgPix from "./services/service.PIX.js";

// Obtendo valores:
const select = localStorage.getItem("select");
const selecionado = select.split(",");
const valorLivre = Number(localStorage.getItem("livre"));
let valores = localStorage.getItem("valores");
valores = valores.split(",")

// Controller para itens selecionados e soma:
const valor = somaTotal(selecionado, valores,valorLivre);

// Controller para pagamento via PIX:
const reponse = await pgPix(valor);
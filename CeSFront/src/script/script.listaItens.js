import { compraItem } from "./controllers/controller.compraItens.js";
import geraItens from "./controllers/controller.itens.script.js";

// Obtendo itens da loja:
geraItens();

// Obtendo e acompanhando itens clicados
const btnItem = document.querySelectorAll(".btn");
let select = [];// recebe os itens selecionados
btnItem.forEach((e)=>{
    e.addEventListener("click", (e)=>{
        select = compraItem(e);
    })
});


// Carrinho:
const btnCarrinho = document.getElementById("btnCarrinho");

btnCarrinho.addEventListener("click", () => {

    //Obtendo itens selecioandos:
    let slt = []; // Legenda;
    let valor = []; // Valor
    select.forEach((e)=>{
        slt.push(e.children[1].textContent);
        valor.push(e.children[2].textContent);
    });
    
    localStorage.setItem("select", slt);
    localStorage.setItem("valores", valor);

    const livre = document.getElementById("livre").value;
    
    localStorage.setItem("livre", livre);
    window.location.href = "pagamento.html"
});

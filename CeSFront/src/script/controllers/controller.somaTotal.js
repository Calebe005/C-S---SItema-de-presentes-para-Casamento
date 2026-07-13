export function somaTotal(e,Ve,Vl){
    const itens = document.getElementById("itens"); // Container para itens.

    // Atribuindo cada valor na lista
    e.forEach((e, i)=>{
        let p = document.createElement("p");
        let valor = document.createElement("p");
        let div = document.createElement("div");
        p.textContent = e;
        valor.textContent = Ve[i];
        div.appendChild(p);
        div.appendChild(valor);
        itens.appendChild(div);

        div.classList.add("itemLista");
    });

    // Verificando se tem valor livre:
    if(Vl){
            let p = document.createElement("p");
            let valorT = document.createElement("p");
            let div = document.createElement("div");
            p.textContent = "Valor Livre"
            valorT.textContent = `R$${Vl}`

            div.appendChild(p);
            div.appendChild(valorT);
            itens.appendChild(div);
            div.classList.add("itemLista");
        }
    

    // Obtendo valor total da soma:
    let total = 0;
    Ve.forEach((e)=>{
       total += Number(e.slice(3));
    })
    let p = document.createElement("p");
    p.textContent = `Total........................................R$${total + Vl}`
    p.id = "total"
    itens.appendChild(p);

    return total+Vl;
}

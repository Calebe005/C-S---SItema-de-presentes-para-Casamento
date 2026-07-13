let selecionados = [];
export function compraItem(event){
    // Obtendo a div do botão clicado
    const element = event.target;
    const div = element.parentElement

    if(div.classList.contains("selecionado")){
        div.classList.remove("selecionado");
        selecionados = selecionados.filter(e => e !== div); 
    } else {
        div.classList.add("selecionado");
        selecionados.push(div);
    }

    const addItem = document.getElementById("itemAdd");

    if(selecionados.length > 0){
        addItem.style.display = "block";
    } else{
         addItem.style.display = "none";
    }
        
    return selecionados
}
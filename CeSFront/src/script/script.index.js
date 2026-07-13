const btnOk = document.getElementById("btnOk");

btnOk.addEventListener("click", ()=>{
    const nome = document.getElementById("nome").value
    if(nome != ""){
        localStorage.setItem("nome", nome);
        window.location.href = "src/pages/listaPresentes.html"
    }else{
        alert("Digite seu nome!");
    }
})


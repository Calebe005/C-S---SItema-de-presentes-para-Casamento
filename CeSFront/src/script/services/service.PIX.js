export default async function pgPix(valor){
    const nome = localStorage.getItem("nome"); // Obtendo quem presenteou;
    const presentes = document.querySelectorAll(".itemLista");
    let legendas = []
    presentes.forEach((e)=>{
        legendas.push(e.querySelector("p").textContent);
    })

    const reponse = await fetch("http://localhost:8080/pix/",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            valor: valor,
            item: `${legendas} por: ${nome}`
        })

    });

    const qrcode = await reponse.json();
    // passando img para o front;
    const imgQr = document.getElementById("qrcode");
    imgQr.src = `data:image/png;base64,${qrcode.qr_code_base64}`;
   
    imgQr.addEventListener("click",()=>{
        navigator.clipboard.writeText(qrcode.qr_code)
        alert("Chave Pix Copiada")
    })
}

export default function geraItens(){
    for(let i = 2; i <= 35;i++){
        const main = document.getElementById("containerItens"); // Obtendo container principal
        const ext = [".png", ".jpeg"]; // Extenções de imagens
        const imgJ = [1,30, 32, 34, 35] // Imagens jPeg

        // Gerando div principal e img:
        let div = document.createElement("div");
        div.classList.add("item");
        let divImg = document.createElement("div");
        let img = document.createElement("img");

        // Verificando que imagem incluir
        if(imgJ.includes(i)){
            img.src = `../../assets/img/imgItens/img${i}${ext[1]}`
        }else{
            img.src = `../../assets/img/imgItens/img${i}${ext[0]}`
        }
        divImg.appendChild(img);
        divImg.classList.add("divImg");
        div.appendChild(divImg);
        
        // Gerando legenda e botão
        let p = document.createElement('p');
        let button = document.createElement("button");

        const itens = [
        "Contribuição para a lua de mel muito chick (O noivo agradece)",
        "Ajuda para maquiagem da noiva",
        "Spa de casal para reduzir a ansiedade da noiva",
        "Jantar de casal romântico",
        "Jogo de cama completo",
        "Travesseiros de qualidade para bater no noivo",
        "Roupões bordados com Iniciais",
        "Guarda-roupas ou cômoda para guardar a noiva",
        "Toalhas para a noiva tirar a maquiagem e jogar fora",
        "Kit Higiene. Alguém aqui tá precisando ...",
        "Cesto de roupas para levar a noiva para passear",
        "Ferro de passar a vapor, para a noiva não queimar as roupas",
        "Secadora de roupas em varal. Um cantinho para colocar o noivo quando me fizer raiva",
        "Kit de cabides para diminuir o furação quando a noiva for se arrumar",
        "Air fryer para quando tivermos preguiça de cozinhar",
        "Robô aspirador para ajudar a noiva com a bagunça do noivo",
        "Tranca eletrônica para trancar o noivo em casa",
        "Smart TV maior que a noiva",
        "Micro-ondas para esquentar a comida do buffet pós-casamento",
        "Geladeira para esfriar a cabeça da noiva",
        "Conjunto de panelas inox resistentes para tacar na cabeça do noivo",
        "Tranca eletrônica para trancar o noivo em casa",
        "Copos e taças para receber as visitas que chegam sem avisar",
        "Micro-ondas para esquentar a comida do buffet pós-casamento",
        "Liquidificador potente para ligar quando a noiva tiver falando estressada",
        "Kit de potes herméticos, para guardar os doces escondidos da noiva",
        "Ir de branco no dia do casamento",
        "Travessas de vidro para lhe servir quando for nos visitar",
        "Sofá para caber a futura família",
        "Tapete para o noivo jogar a sujeira de baixo",
        "Porta-retratos para deixar a casa bonitinha",
        "Luminária para ajudar o noivo enxergar onde tá errado",
        "Painel para a TV maior que a noiva",
        "Almofadas para se proteger da panelada da noiva"
        ]; // Texto dos itens
        p.textContent = itens[i-2]

        button.classList.add("btn");
        const valores = [
        "R$ 320",
        "R$ 450",
        "R$ 180",
        "R$ 250",
        "R$ 400",
        "R$ 150",
        "R$ 220",
        "R$ 480",
        "R$ 300",
        "R$ 190",
        "R$ 200",
        "R$ 350",
        "R$ 410",
        "R$ 280",
        "R$ 500",
        "R$ 360",
        "R$ 300",
        "R$ 420",
        "R$ 270",
        "R$ 490",
        "R$ 400",
        "R$ 310",
        "R$ 350",
        "R$ 120",
        "R$ 200",
        "R$ 150",
        "R$ 460",
        "R$ 250",
        "R$ 370",
        "R$ 500",
        "R$ 140",
        "R$ 350",
        "R$ 410",
        "R$ 180"
];
 // Valores dos botões
        button.textContent = valores[i-2]


        div.appendChild(p);
        div.appendChild(button);





        main.appendChild(div); // Adicionando item
    }
}

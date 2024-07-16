console.log("\n Trabalhando com loops.");

const idadeComprador = 20;
estaAcompanhada = true;
let passagemComprada = false;
const destino = "Rio de Janeiro";

const listasDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

console.log("\n Destinos Possíveis:", listasDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < listasDeDestinos.length) {
    if (listasDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste);


if (podeComprar && destino) {
    console.log("Boa Viagem!");
} else {
    console.log("Tivemos um erro");
}

for (let count=0; count < 3; count++) {
    if (listasDeDestinos[count] == destino) {
        destinoExiste = true;
    }
}






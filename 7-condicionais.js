console.log("Trabalhando com condicionais");

const idadeComprador = 20;
estaAcompanhada = true;
passagemComprada = true;

const listasDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

console.log("Destinos Possíveis:", listasDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa Viagem!")
    listasDeDestinos.splice(2, 1); // Splice (posição , quantidade) [0, 1, 2, 3] 
    console.log("Destinos Possíveis:", listasDeDestinos);

} else { console.log("Não está acompanhado."); }


console.log("Embarque: \n\n")
if (idadeComprador >= 18 && passagemComprada) {
    console.log("Boa Viagem!");
} else {
    console.log("Não é possível embarcar!");
}














// if (menorIdade >= 18) {
//     console.log("Comprador maior de Idade")
//     listasDeDestinos.splice(2, 1); // Splice (posição , quantidade) [0, 1, 2, 3] 
//     console.log("Destinos Possíveis:", listasDeDestinos);

// } else if (estaAcompanhada) { //estaAcompanhada == 1
//     // A pessoa é menor de idade.
//     console.log("Comprador está acompanhado.")
//     listasDeDestinos.splice(2, 1);
//     console.log("Destinos Possíveis:", listasDeDestinos);

// } else { console.log("Não está acompanhado."); }

// console.log(menorIdade > 18);
// console.log(menorIdade < 18);
// console.log(menorIdade >= 18);
// console.log(menorIdade <= 18);
// console.log(menorIdade == 18);









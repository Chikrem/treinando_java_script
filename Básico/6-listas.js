console.log("Trabalhando com listas");

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log("Destinos Possíveis:");
console.log(salvador, saoPaulo, rioDeJaneiro);


// Array
const listasDeDestinos = new Array(`Salvador`,`São Paulo`,`Rio de Janeiro`);

console.log("Destinos Possíveis:", listasDeDestinos);

// Adicionar itens

listasDeDestinos.push("Curitiba");

console.log("Destinos Possíveis:", listasDeDestinos);

// Remover itens

listasDeDestinos.splice(2,1) // Splice (posição , quantidade) [0, 1, 2, 3] 
console.log("Destinos Possíveis:", listasDeDestinos);

// Acessando posição


console.log("Destinos Possíveis:", listasDeDestinos[0], listasDeDestinos[2]);





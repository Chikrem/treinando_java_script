import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

// CLIENTE 1

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

// CLIENTE 2

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 111228888888;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1002;
contaCorrenteAlice.cliente = cliente2;

// OPERAÇÕES

const valorDepositado = contaCorrenteRicardo.depositar(1000);
const valorSacado = contaCorrenteRicardo.sacar(50);

contaCorrenteRicardo.transferir(200, contaCorrenteAlice);
console.log(contaCorrenteAlice)
console.log(contaCorrenteRicardo);




// const cliente1Nome = "Ricardo";
// const cliente1CPF = 11122233309;
// const cliente1Agencia = 1001;
// const cliente1Saldo = 0;

// const cliente2.Nome = "Alice";
// const cliente2.CPF = 88822233309;
// const cliente2.Agencia = 1001;
// const cliente2.Saldo = 0;

// Cada cliente-usuário possui o mesmo conjunto de atributos

export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
        
    }

    constructor(nome, cpf) {
        this.nome =  nome;
        this._cpf = cpf; 
    }

}
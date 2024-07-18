export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0; // #saldo Atributo Privado também referenciado como _saldo convencionalmente

    sacar(valor) {

        console.log("Valor Sacado:", valor)

        if (this._saldo <= valor) {
            console.log("Saldo Insuficiente!");
            return;
        } else {
            this._saldo -= valor;
            console.log("Novo Saldo:", this._saldo);
            return valor;
        }
    }
    depositar(valor) {

        console.log("Valor Depositado:", valor)

        if (valor > 0) {
            this._saldo += valor;
            console.log("Novo Saldo:", this._saldo);
            return valor;
        } else { console.log("Operação Inválida!") }
    }
    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    
    }
}
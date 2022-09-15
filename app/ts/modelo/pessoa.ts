class Pessoa {

    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date = new Date();
    readonly _contas: Array<Conta>;

    constructor(nome: string, idade: number, dataNascimento: Date){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
        this._contas = new Array<Conta>();
    }

    get nome(): string {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(novaDataNascimento) {
        this._dataNascimento = novaDataNascimento;
    }

    getContas(): Conta[] {
        return this._contas;
    }

    saldoTotalContas(): number {

        let somatorio = 0;

        this._contas.forEach(saldoConta => somatorio = somatorio + saldoConta.getSaldo());
        return somatorio;
    }

    mediaSaldoContas(): number {
        return this.saldoTotalContas()/this._contas.length;
    }

    acrescentarConta(novaConta: Conta) {
        this._contas.push(novaConta);
    }

    pesquisar(numero: string) {
        return this._contas.find(conta => conta.numero === numero);
    }

    removerContas(numero: string) {
        const contaRemover = this.pesquisar(numero);
        if (contaRemover) {
            const indiceARemover = this._contas.indexOf(contaRemover);
            if (indiceARemover > -1) {
                this._contas.splice(indiceARemover, 1);
            }
        }
    }
}
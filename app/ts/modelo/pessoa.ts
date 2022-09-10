class Pessoa {

    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date = new Date();

    constructor(nome: string, idade: number, dataNascimento: Date){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
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
}
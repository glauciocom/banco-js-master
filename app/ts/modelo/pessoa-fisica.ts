class PessoaFisica extends Pessoa {

    readonly _cpf: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
        super.nome = super.nome + ' - Física';
    }

    get cpf(): string {
        return this._cpf;
    }
}

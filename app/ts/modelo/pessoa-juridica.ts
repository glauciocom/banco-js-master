
class PessoaJuridica extends Pessoa {

    readonly _cnpj: string;
    //protected _nome: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
        super.nome = super.nome + ' - Juridica';
    }

    get cnpj(): string {
        return this._cnpj;
    }
}
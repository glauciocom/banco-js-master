class RepositorioPessoas {

    readonly pessoas: Array<Pessoa>;

    constructor() {
        this.pessoas = new Array<Pessoa>();
    }

    adicionar(pessoa: Pessoa) {
        this.pessoas.push(pessoa);
    }

    pesquisar(nome: string) {
        return this.pessoas.find(pessoa => pessoa.nome === nome);
    }

    getPessoas() {
        return this.pessoas;
    }

    remover(nome: string) {
        const pessoaRemover = this.pesquisar(nome);
        if (pessoaRemover) {
            const indiceARemover = this.pessoas.indexOf(pessoaRemover);
            if (indiceARemover > -1) {
                this.pessoas.splice(indiceARemover, 1);
            }
        }
    }
}
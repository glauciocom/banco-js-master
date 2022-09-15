class PessoaController {
    private repositorioPessoas: RepositorioPessoas;

    constructor() {
        this.repositorioPessoas = new RepositorioPessoas();
    }

    adicionarPessoa(pessoa: Pessoa) {
        this.repositorioPessoas.adicionar(pessoa);
    }

    listar() {
        this.repositorioPessoas.getPessoas().forEach(pessoa =>
            this.inserirPessoaNoHTML(pessoa)
        );
    }

    inserir(evento: Event) {
        evento.preventDefault();
        const elementoNome = <HTMLInputElement>document.querySelector('#nome');
        const elementoIdade = <HTMLInputElement>document.querySelector('#idade');
        const elementoDataNascimento = <HTMLInputElement>document.querySelector('#data-nascimento');

        const pessoa = new Pessoa(elementoNome.value, Number(elementoIdade.value), elementoDataNascimento.valueAsDate);
        this.repositorioPessoas.adicionar(pessoa);
        this.inserirPessoaNoHTML(pessoa);
    }

    inserirPessoaNoHTML(pessoa: Pessoa) {
        const elementoS = document.createElement('span');
        elementoS.textContent = `Pessoa ${pessoa.nome}, idade: ${pessoa.idade}, data nascimento: ${pessoa.dataNascimento}`;
        const botaoApagar2 = document.createElement('button');
        botaoApagar2.textContent = 'X';

        botaoApagar2.addEventListener('click', (event) => {
            this.repositorioPessoas.remover(pessoa.nome);
            (<Element>event.target).parentElement.remove();
        });

        elementoS.appendChild(botaoApagar2);
        document.body.appendChild(elementoS);
    }
}

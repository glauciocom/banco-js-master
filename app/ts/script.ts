const c1 = new Conta('1', 100);
const c2 = new Conta('2');

console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());

const data1 = new Date('1995-1-10');
const p1 = new Pessoa('Telma',27, data1);
const data2 = new Date('1971-1-5');
const p2 = new PessoaFisica('Raul',51, data2, '12345678912');
const data3 = new Date('1992-3-1');
const p3 = new PessoaJuridica('Paralamas Ltda', 30, data3, '16456321000112');

console.log();
console.log('### Pessoa 1 ###')
console.log(`Nome: ${p1.nome}`);
console.log(`Idade: ${p1.idade} anos`);
console.log(`Data de nascimento: ${p1.dataNascimento.getUTCDate()}/${p1.dataNascimento.getMonth()+1}/${p1.dataNascimento.getFullYear()}`);
console.log();
console.log('### Pessoa 2 ###')
console.log(`Nome: ${p2.nome}`);
console.log(`Idade: ${p2.idade} anos`);
console.log(`Data de nascimento: ${p2.dataNascimento.getUTCDate()}/${p2.dataNascimento.getMonth()+1}/${p2.dataNascimento.getFullYear()}`);
console.log(`CPF: ${p2.cpf}`);
console.log();
console.log('### Pessoa 3 ###');
console.log(`Nome: ${p3.nome}`);
console.log(`Idade: ${p3.idade} anos`);
console.log(`Data de constituição: ${p3.dataNascimento.getUTCDate()}/${p3.dataNascimento.getMonth()+1}/${p3.dataNascimento.getFullYear()}`);
console.log(`CNPJ: ${p3.cnpj}`);

// Criação de 3 clientes e 3 empresas.
const dataUm = new Date('1985-1-10');
const clienteUm =  new Cliente("Eva", 37, dataUm ,'98765432111');
const contaUmClienteUm = new Conta('3',39);
const contaDoisClienteUm = new Conta('4', 61);
clienteUm.acrescentarConta(contaUmClienteUm);
clienteUm.acrescentarConta(contaDoisClienteUm);
const dataDois = new Date('1975-1-10');
const clienteDois =  new Cliente("Lily", 47, dataDois ,'879654322222');
const dataTres = new Date('1965-1-10');
const clienteTres =  new Cliente("Raul", 57, dataTres ,'79865432333');

const dataConstUm = new Date('1985-1-10');
const empresaUm =  new Empresa("Livros Ltda", 37, dataConstUm ,'31298765432111');
const dataConstDois = new Date('1975-1-10');
const empresaDois =  new Empresa("Cadeiras Ltda", 47, dataConstDois ,'23198765432111');
const dataConstTres = new Date('1965-1-10');
const empresaTres =  new Empresa("Mesas Ltda", 57, dataConstTres ,'12398765432111');

console.log('.');
console.log('### Clientes e Empresas');

console.log(clienteUm);
console.log('#');
console.log(`Saldo da conta 1 do Cliente 1: ${contaUmClienteUm.getSaldo()}`);
console.log(`Saldo da conta 2 do Cliente 1: ${contaDoisClienteUm.getSaldo()}`);
console.log(`Saldo total do Cliente 1: ${clienteUm.saldoTotalContas()}`);
console.log(`Média do saldo do Cliente 1: ${clienteUm.mediaSaldoContas()}`);



console.log(clienteDois);
console.log(clienteTres);

console.log(empresaUm);
console.log(empresaDois);
console.log(empresaTres);

console.log(clienteUm.nome)

// pessoaController
const pessoaController = new PessoaController();
pessoaController.adicionarPessoa(empresaUm);
pessoaController.listar();

// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)

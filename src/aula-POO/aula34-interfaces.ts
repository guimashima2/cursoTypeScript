interface TipoPessoa {
  nome: string;
}

interface TipoPessoa2 {
  sobrenome: string;
}
interface TipoPessoa3 {
  nomeCompleto(): string;
}

type pessoaTupoCompleta = TipoPessoa & TipoPessoa2 & TipoPessoa3;
interface pessoa2 extends TipoPessoa, TipoPessoa2, TipoPessoa3 {}

class Pessoa implements pessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
const pessoaObj: pessoa2 = {
  nome: 'shima2',
  sobrenome: 'shima2',
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};
const pessoa = new Pessoa('shima', 'shima');
console.log(pessoa.nomeCompleto());

export default { Pessoa };

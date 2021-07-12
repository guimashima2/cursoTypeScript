type TipoPessoa = {
  nome: string;
};

type TipoPessoa2 = {
  sobrenome: string;
};
type TipoPessoa3 = {
  nomeCompleto(): string;
};

class Pessoa implements TipoPessoa, TipoPessoa2, TipoPessoa3 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('shima', 'shima');
console.log(pessoa.nomeCompleto());

export default { Pessoa };

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  metodoNormal(): void {
    console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao);
  }
}

const ind1 = new Pessoa('shima', 'shima', 23, '123.123.123-12');
const ind2 = Pessoa.criaPessoa('shima', 'shima');
ind2.metodoNormal();
console.log(ind2);

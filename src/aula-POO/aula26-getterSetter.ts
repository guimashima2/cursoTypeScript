export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const ind1 = new Pessoa('shima', 'shima', 23, '123.123.123-12');
ind1.cpf = '525.252.252-25';
console.log(ind1.cpf);

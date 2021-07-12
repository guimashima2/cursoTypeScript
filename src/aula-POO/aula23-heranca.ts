export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
    protected readonly cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('shima', 'shima', 23, '102.012.021-12');
const aluno = new Aluno('shima', 'shima', 23, '102.012.021-12');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());

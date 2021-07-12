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
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public ra: number,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.ra = ra;
  }

  getNomeCompleto(): string {
    console.log('fazendo algo antes');
    return super.getNomeCompleto();
  }
}

const pessoa = new Pessoa('shima', 'shima', 23, '102.012.021-12');
const aluno = new Aluno('shima', 'shima', 23, '102.012.021-12', 145522);

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());

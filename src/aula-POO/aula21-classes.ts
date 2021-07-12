export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  adicionaColaborador(...cols: Colaborador[]): void {
    cols.forEach((col) => this.colaboradores.push(col));
  }
  mostrarColaboradores(): void {
    console.log(this.colaboradores);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('shima LTDA', '12.154.111/0001-11');
const col1 = new Colaborador('shima', 'shima');
const col2 = new Colaborador('shima2', 'shima2');
const col3 = new Colaborador('shima3', 'shima3');
const col4 = {
  nome: 'shima4',
  sobrenome: 'shima4',
};
empresa1.adicionaColaborador(col1, col2, col3, col4);
empresa1.mostrarColaboradores();

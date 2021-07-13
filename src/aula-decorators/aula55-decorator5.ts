function decorador(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDecorator,
): any {
  return {
    value: function (...args: any[]): number {
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorador
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiro = palavras.shift();
    if (!primeiro) return;
    this.nome = primeiro;
    this.sobrenome = palavras.join(' ');
  }
}

const per = new UmaPessoa('shima', 'shima2', 23);
//per.metodo = () => 'aoba'; //vai dar erro aq
console.log(per.metodo('ola'));

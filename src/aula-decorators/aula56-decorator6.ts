function decorator(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
}

export class UmaPessoa {
  constructor(
    @decorator public nome: string,
    @decorator public sobrenome: string,
    @decorator public idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorator msg: string): string {
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

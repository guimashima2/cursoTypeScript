function decorator(classPrototype: any, nome: string | symbol): any {
  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor == 'string') {
        valorPropriedade = valor.split('').reverse().join('');
        return;
      }
      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  @decorator
  nome: string;
  sobrenome: string;
  idade: number;
  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

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

function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('to no comeco do decorator');
  return class extends target {
    cor: string;
    nome: string;
    constructor(...args: any[]) {
      super(...args);
      this.nome = this.textoReverso(args[0]);
      this.cor = this.textoReverso(args[1]);
    }

    textoReverso(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}
@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('to dentro do animal');
  }
}

const animal = new Animal('shima', 'ROXO');
console.log(animal);

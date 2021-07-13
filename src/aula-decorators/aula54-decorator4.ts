interface Constructor {
  new (...args: any[]): any;
}
function inverteNomeECor(param1: string, param2: string) {
  //Closure
  return function <T extends Constructor>(target: T): T {
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
        return valor.split('').reverse().join('').concat(param1, param2);
      }
    };
  };
}
function outroInverteNomeECor(target: Constructor) {
  console.log('outro decorator');
}

@outroInverteNomeECor
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('to dentro do animal');
  }
}

const animal = new Animal('shima', 'ROXO');
console.log(animal);

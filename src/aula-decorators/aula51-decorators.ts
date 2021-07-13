export class Animal {
  constructor(public nome: string, public cor: string) {}
}
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log('oi');
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
const AnimalDec = decorator(Animal);
const animal = new AnimalDec('shima', 'ROXO');

console.log(animal);

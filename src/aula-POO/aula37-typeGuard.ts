export function add(a: unknown, b: unknown): string | number {
  return typeof a == 'number' && typeof b == 'number' ? a + b : `${a} ${b}`;
}

console.log(add(1, 2));
console.log(add('1', '2'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
  tipo: 'pessoa' = 'pessoa';
}

function mostrarNome(obj: PessoaOuAnimal): void {
  //if ('nome' in obj) console.log(obj.nome);
  //if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log('e uma pessoa ' + obj.nome);
      return;
    case 'animal':
      console.log('e um animal ' + obj.cor);
      return;
  }
}

mostrarNome(new Aluno('Shima'));
mostrarNome({ tipo: 'animal', cor: 'rosa' });

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['vacina 1', 'vacina 2'],
  idade: 4,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
const idade = obterChave(animal, 'idade');

console.log(vacinas, cor, idade);

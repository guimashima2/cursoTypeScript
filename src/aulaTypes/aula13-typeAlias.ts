type Idade = number;
type pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: corPreferida;
};
type corRGB = 'VERMELHO' | 'VERDE' | 'AZUL';
type corCMYK = 'CIANO' | 'MAGENTA' | 'AMARELO' | 'PRETO';

type corPreferida = corRGB | corCMYK;

const ind1: pessoa = {
  nome: 'shima',
  idade: 20,
  salario: 4,
  corPreferida: 'MAGENTA',
};

export function setCorPreferida(ind: pessoa, cor: corPreferida): pessoa {
  return { ...ind, corPreferida: cor };
}

console.log(setCorPreferida(ind1, 'AZUL'));

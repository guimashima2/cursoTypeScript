type temNome = { nome: string };
type temSobrenome = { Sobrenome: string };
type temIdade = { idade: number };

type Pessoa = temNome & temSobrenome & temIdade;
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;

const ind: Pessoa = {
  idade: 20,
  nome: 'shima',
  Sobrenome: 'shima',
};

export { ind };

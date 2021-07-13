interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

interface PessoaProtocolo2<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, string> = {
  nome: 'shima',
  sobrenome: 'shima',
  idade: '23',
};

const aluno2: PessoaProtocolo2 = {
  nome: 'shima',
  sobrenome: 'shima',
  idade: 2,
};

const aluno3: PessoaProtocolo<number, number> = {
  nome: 23,
  sobrenome: 12,
  idade: 27,
};

console.log(aluno, aluno2, aluno3);

interface Pessoa {
  nome: string;
}

interface Pessoa {
  sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}

interface Pessoa {
  idade?: number;
}
const pessoa: Pessoa = {
  nome: 'shima',
  sobrenome: 'shima',
  enderecos: ['Av Brasil'],
};

pessoa.enderecos.push('Rua Nova');
console.log(pessoa);

export default { pessoa };

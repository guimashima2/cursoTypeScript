let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;

let a = 100 as const; // eslint-disable-line
//a = 200;

const pessoa = {
  nome: 'shima' as const,
  sobrenome: 'shima',
};

function escolhaCores(cor: 'VERMELHO' | 'AMARELO' | 'AZUL') {
  return cor;
}
console.log(escolhaCores('AMARELO'));

export default 1;

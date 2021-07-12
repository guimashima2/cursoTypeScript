const coresObj = {
  Vermelho: 'Red',
  Verde: 'Green',
  Azul: 'Blue',
};

type CoresObj = typeof coresObj;
type Coreskey = keyof CoresObj;

function traduzirCor(cor: Coreskey, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('Vermelho', coresObj));

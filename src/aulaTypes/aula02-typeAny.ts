function show(msg: any) {
  return msg;
}
console.log(show(1));
console.log(show('aoba'));

const pessoa = {
  nome: 'shima',
  sobrenome: 'shima',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();
export { pessoa };

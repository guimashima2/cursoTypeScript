const dadosCliente1: readonly [number, string] = [1, 'algo'];
const dadosCliente2: [number, string, string?] = [2, 'algo'];
const dadosCliente3: [number, string, ...string[]] = [3, 'algo'];
//dadosCliente1[0] = 100;
dadosCliente2[1] = '100';
console.log(dadosCliente1);

const array1: ReadonlyArray<string> = ['shima', 'shima'];
const array3: readonly string[] = ['shima', 'shima'];

//  Array<Type> or Type[]
function multiArgs(...args: number[]) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatStrings(...args: string[]) {
  return args.reduce((ac, valor) => ac + ' ' + valor);
}

function concatStringsUpper(...args: string[]) {
  return args.map((valor) => valor.toLocaleUpperCase());
}
console.log(multiArgs(1, 2, 3));
console.log(concatStrings('a', 'b', 'c'));
console.log(concatStringsUpper('a', 'b', 'c'));

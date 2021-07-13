export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

console.log(isNumber(5));
console.log(isNumber('5'));

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, valor) => {
    if (isNumber(sum) && isNumber(valor)) return (sum += valor);
    return sum;
  }, 0);
  return retorno;
}

console.log(soma(1, 2, 3, 4, 5));
console.log(soma(1, 2, 3, 4));
console.log(soma(...[1, 2, 3, 'a', 'b', 'c']));

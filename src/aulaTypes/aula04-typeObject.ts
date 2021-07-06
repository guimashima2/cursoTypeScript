const objA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objA.chaveB = 'outra chave A';
objA.chaveC = 'nova C';

objA.chaveD = 'nova D';

console.log(objA.chaveC);

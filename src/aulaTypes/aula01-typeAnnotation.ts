/*eslint-disable*/
let nome = 'luiz';

let array: number[] = [2, 4, 6]
let array2: Array<String> = ['2', '4', '6']

let pessoa: {
    nome: String,
    idade: Number,
    adulto?:  Boolean,
} = {
    nome: 'aoba',
    idade: 20,
}

function soma (x: number, y:number) {
    return x + y
}
let result = soma(1, 2)

const soma2: (x:number, y:number) => number = (x, y) => (x + y )
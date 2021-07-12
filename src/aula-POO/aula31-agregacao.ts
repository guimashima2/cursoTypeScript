export class Produto {
  constructor(public _nome: string, public preco: number) {}
  get nome(): string {
    return this._nome;
  }
  set nome(nome: string) {
    this._nome = nome;
  }
}

export class Carrinho {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...items: Produto[]): void {
    items.forEach((item) => this.produtos.push(item));
  }

  quantidade(): number {
    return this.produtos.length;
  }

  total(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

const prod1 = new Produto('Camiseta', 10);
const car = new Carrinho();
car.inserirProdutos(prod1, prod1, prod1);
console.log(car.total());

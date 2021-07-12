export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) console.log('Ferramenta e nulo');
    else this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo`);
  }
}

export class Teclado extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo`);
  }
}

const escritor = new Escritor('shima');
const bicAzul = new Caneta('Bic Azul');
const razer = new Teclado('Razer RGB');

escritor.ferramenta = bicAzul;
escritor.ferramenta = razer;
escritor.escrever();

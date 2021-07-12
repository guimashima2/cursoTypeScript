export abstract class Personagem {
  protected abstract icon: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}
  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} esta atacando`);
    personagem.perderVida(this.ataque);
  }
  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.nome} recebeu ${forcaAtaque} e tem ${this.vida} de vida`,
    );
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected icon = '\u{1F9DD}';
  bordao(): void {
    console.log(this.icon + ' Toma Essa');
  }
}
export class Monstro extends Personagem {
  protected icon = '\u{1F9DF}';
  bordao(): string {
    console.log(this.icon + ' wuaakkaua');
    return 'wuaakkaua';
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);

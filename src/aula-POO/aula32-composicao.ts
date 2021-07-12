export class Motor {
  ligar(): void {
    console.log('motor ta ligando');
  }
  acelerar(): void {
    console.log('motor ta acelerando');
  }
  parar(): void {
    console.log('motor ta parado');
  }
  desligar(): void {
    console.log('motor ta desligado');
  }
}

export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.desligar();
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();

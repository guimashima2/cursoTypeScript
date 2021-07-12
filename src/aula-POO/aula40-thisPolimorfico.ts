export class calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }
  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calc = new SubCalculadora(5);

calc.add(5).sub(3).pow(2);
console.log(calc);

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(metodo: 'get' | 'post'): this {
    this.method = metodo;
    return this;
  }
  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setMethod('get').setUrl('www.google.com').send();

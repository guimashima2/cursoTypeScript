/* eslint-disable @typescript-eslint/no-namespace */
namespace meuNameSpace {
  export const nome = 'shima';

  export class PessoaNameSpace {
    constructor(public nome: string) {}
  }

  export namespace outroNameSpace {
    export const nome = 'shimaOutro';
  }
}

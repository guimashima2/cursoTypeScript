//dentro dos modulos, se nomearmos com os mesmos nomes dos namespaces e com o mesmo nome do interface
//eles se mesclam. assim, conseguindo eliminar aqueles erros no file do TS
declare namespace _ {
  declare interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MINHAGLOBAL: string;
  }
}

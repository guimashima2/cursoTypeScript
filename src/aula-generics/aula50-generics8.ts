//Type Record
const obj1: Record<string, string | number> = {
  nome: 'shima',
  sobrenome: 'shima',
  idade: 3,
};
console.log(obj1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

///RequiredType
type PessoaRequired = Required<PessoaProtocol>;
//PartialType
type PessoaPartial = Partial<PessoaProtocol>;
//readonlyType
type PessoaReadonly = Readonly<PessoaRequired>;
//pickType
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>;

const obj2: PessoaRequired = {
  nome: 'shima',
  sobrenome: 'shima',
  idade: 3,
};

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asuashaksdashdas',
  nome: 'shima',
  idade: 23,
};

function mapAccount(acc: AccountMongo): AccountAPI {
  const { _id, ...accData } = acc;
  return { ...accData, id: _id };
}

const accAPI = mapAccount(accountMongo);
console.log(accAPI);
export default 1;

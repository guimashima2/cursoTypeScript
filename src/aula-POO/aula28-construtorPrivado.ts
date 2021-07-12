//Singleton - GoF | Factory Method - GoF
export class DataBase {
  private static database: DataBase;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}
  connect(): void {
    console.log(`conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDB(host: string, user: string, password: string): DataBase {
    if (this.database) return this.database;
    this.database = new DataBase(host, user, password);
    return this.database;
  }
}

const DB1 = DataBase.getDB('localhost', 'shima', 'shimapass');
DB1.connect();

const DB2 = DataBase.getDB('localhost2', 'shima', 'shimapass');
DB2.connect();

console.log(DB1 == DB2);

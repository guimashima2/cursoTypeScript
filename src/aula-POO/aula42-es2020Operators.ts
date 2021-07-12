//Encadeamento opcinal e operador de coalescencia nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const doc: Documento = {
  titulo: 'titulo',
  texto: 'um texto',
  data: new Date(),
};

console.log(doc.data?.toDateString() ?? 'ixi nao existe data');

// ?? como se fosse um if q ve se o elemento na frente dele e undefined ou null. se for, executa oq veio depois
// ?? serve para undefined e null

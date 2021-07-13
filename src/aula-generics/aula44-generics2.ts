type MeuTipo = number;

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resulrado) => console.log(resulrado + 1));
minhaPromise().then((resulrado) => console.log(resulrado + 1));

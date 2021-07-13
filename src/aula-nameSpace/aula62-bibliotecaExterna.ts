//Validator e uma biblioteca externa.
// ao usar bibliotecas externas, e necessario instalar ela e o types dela.
//npm i @types/validator -D e npm i validator
//types para DESENVOLVIMENTO e validator para producao
import validator from 'validator';

console.log(validator.isEmail('aoba@hot.com'));

//condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';
//non-null assertion
const body2 = document.querySelector('body')!; //! fala q elemento nao pode ser nulo
body2.style.background = 'red';
//type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';
//HTML element
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'aoba';
input.focus();
//nao recomendado mais funciona
const body4 = document.querySelector('body') as unknown as number;
body4 * body4;

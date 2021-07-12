//import './form-control'
import '../aula-POO/aula35-intercafeEClasse';

function fun(this: Date, arg1: string): void {
  console.log(this);
  console.log(arg1);
}

//fun.call(new Date(), 'a');
//apply tem q passar como array os args
//fun.apply(new Date(), ['a']);

/*
//Retos 1
function calcularImc(altura, peso) {
    let imc=peso/(altura*altura);
    return imc;
}

function factorialDe(numero){
    let resultado = numero;

    if(resultado == 1 || resultado == 0){
        return 1;
    }
    else{
    while(numero > 1){
        resultado = resultado * (numero-1);
        numero--;
    }
}

return resultado;

//solucion propuesta

/*
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);
*/



/*
let dolares;
function dolaresAReales(dolares){
    return dolares = dolares/4.80;
}
A pesar que esta funcion sirve y hace su trabajo, es poco clara.
*/
/*
function dolaresAReales(dolares) {
    var cotizacionDolar=4.80;
    var reales = dolares/cotizacionDolar;
    return reales;
}

let valorEnDolares = 50;
let valorEnReales = dolaresAReales(valorEnDolares);
console.log(`${valorEnDolares} dolares equivale a ${valorEnReales} reales`);
*/

//Retos 2

//Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

/*Crea una lista de lenguajes de programación llamada
 "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/

 let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

 //Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

 lenguajesDeProgramacion.push('Java');
 lenguajesDeProgramacion.push('Ruby');
 lenguajesDeProgramacion.push('GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

 function lenguajes(){
 let it = 0;
 for(it; it<(lenguajesDeProgramacion.length); it++){
  console.log(lenguajesDeProgramacion[it]);
 }
}
lenguajes();

/* Crea una función que muestre en la consola 
todos los elementos de la lista "lenguagesDeProgramacion en orden inverso. */

function lenguajesInverso() {
  let it2 = lenguajesDeProgramacion.length -1;
  for(it2; it2>=0; it2 --){
    console.log(lenguajesDeProgramacion[it2]);
  }
}

lenguajesInverso();

//Crea una función que calcule el promedio de los elementos en una lista de números.

function promedio() {
  let numeros = [1, 2, 3, 4, 8, 9, 10, 22, 3, 54, 233];
  let suma = 0;
  for(let i=0; i<numeros.length; i++){
    suma += numeros[i];
  }
  return (suma/numeros.length); 
}

console.log(promedio());

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function masPequenoMasGrande() {
  let numerosDos = [7, 2, 3, 4, 32, 9, 10, 22, 3, 54, 233];
  let numeroPeque = numerosDos[0];
  let numeroGrande = numerosDos[0];
  let final = [];
  for(let i = 0; i<numerosDos.length; i++){
    if(numeroPeque > numerosDos[i]){
      numeroPeque = numerosDos[i];
    }
    else{
      if(numeroGrande < numerosDos[i]){
        numeroGrande = numerosDos[i];
      }
    }
  }
  final.push(numeroPeque);
  final.push(numeroGrande);
 return final;
}

console.log(masPequenoMasGrande());

//Crea una función que devuelva la suma de todos los elementos en una lista.

function sumatoria(){
  let suma = 0;
  let numerosDos = [7, 2, 3, 4, 32, 9, 10, 22, 3, 54, 233];
  for(let i = 0; i<numerosDos.length; i++){
    suma += numerosDos[i];
  }
  return suma;
}
console.log("la suma es " + sumatoria());

/*
Crea una función que devuelva la posición en la lista donde se 
encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/
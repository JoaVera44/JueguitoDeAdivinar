

//DOM = Document Object Model. Como se nota en realidad document es un objeto que como tal tiene sus metodos
//para acceder a sus valores.

//Botones -> eventos y gestion de eventos. Clickear es un evento.

let numeroSecreto = 0;
let intentos = 1;
console.log(numeroSecreto);
let listaNumerosGenerados = [];
let numeroMaximo = 10;


//Definicion de funcion

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto
    return;
}
function verificarIntento(){
 //   let numeroUsuario = document.querySelector('input'); esta forma es valida, pero no es la mejor
 //   let numeroUsuario = document.getElementById('valorUsuario'); con esta declaracion consigo el objeto, no el valor
 let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);  
 
    if(numeroSecreto === numeroUsuario){ // === compara valor y tipo
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1 ? 'vez' : 'veces')}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('valorUsuario').setAttribute('disabled', true);
        document.getElementById('botonIntento').setAttribute('disabled', true);
    } else{ //Cuando el usuario falla
        if(intentos == 3){
            asignarTextoElemento('p', 'Te quedaste sin intentos');
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('valorUsuario').setAttribute('disabled', true);
            }
            else{
            if(numeroUsuario < numeroSecreto){
                asignarTextoElemento('p', 'El numero colocado es muy pequeño');
            }
            else asignarTextoElemento('p', 'El numero colocado es muy grande');
        }
        
    }
    limpiarCaja();
    intentos++;
    return;
       
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario'); //En el querySelector puedo indicar por ID aclarando con #
    valorCaja.value = ''; //Acordate que son objetos, no variables aisladas!
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //return numeroSecreto;
    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);
    if(listaNumerosGenerados.length == numeroMaximo){
        asignarTextoElemento('p', `Ya no hay mas numeros para adivinar`);
    }
    else{
        //si el numero generado esta en la lista, genera otro, si no devuelve el numero.
        if(listaNumerosGenerados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosGenerados.push(numeroGenerado);        
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    document.getElementById('valorUsuario').removeAttribute('disabled');
    document.getElementById('botonIntento').removeAttribute('disabled');

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Adivina el numero'); 
    asignarTextoElemento('p', `ingresa un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    

}
/*
 Arrow function
para funciones cortas y concisas
suma de a y b:

sumar = (a,b) => {return a+b;};

ej 2

let cuadrado = x => return x*x

puede llevar llaves o no dependiendo de la complejidad de la funcion a realizar

let saludar = nombre => {
    let mensaje = 'hola' + nombre;
    return mensaje;
    };

lleva punto y coma siempre que no sea lo ultimo definido en el codigo, pero seria una buena practica 
ponerlo siempre

*/


condicionesIniciales(); //donde llamo la funcion no importa, js hace hoisting (prepara todo antes)

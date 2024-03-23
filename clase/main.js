// esto es declarar variables 
let nombre;
let apellido;
let edad;
let temp;
let temp2;

// se asigna el valor
nombre="Leonardo"; //es un tipo de dato string
apellido="Nonino";
edad=31; //los numeros no llevan comillas, no son strings
console.log(edad);
temp=32.5;
//VAR NO SE USA MAS, LAS VARIABLES SE DECLARAN CON LET

//se usa let si o si

//reasignacion de variables

edad=30;
console.log(edad);
//Constante es un valor que no cambiaria
let nombreCompleto="Juan Perez"

const PI=3.14;
const GRAVEDAD=9.8;
const IVA=21; //se llama inicializacion, se inicializa iuna variable
// NO SE PERMITE REASIGNAR EL VALOR DE UNA CONSTANTE
let superficieCircuilo= PI * 23
console.log("la superficie del circulo es: " + superficieCircuilo + "cm cuadrados");
//Concatenacion
let nombre2="Rodrigo";
let apellido2="Perez";

let nombreCompleto2=nombre2 + apellido2;

let suma = edad + PI; //operacion aritmetica

//metodo de salida de datos

console.log(nombre)


// alert("hola mundo")

//let nombre3= prompt("escribe tu nombre")
//console.log(nombre3);



//calculadora :D
let usuario= prompt("ingresa tu nombre")
alert("bienvenido/a " + usuario)

let num1= prompt("escribe un numero para sumar")
let num2= prompt("escribe tu numero para sumnar")

num1= parseInt(num1)
num2= parseFloat(num2)
let result= num1 + num2;
alert("el resultado de la sumna entre " + num1 + " + " + num2 + " es: " + result);

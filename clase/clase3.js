// for(let i= 0; i <= 10; i= i + 1){
//     console.log("la variable i vale:" + i)
// }
// let ingreso= parseInt(prompt("Ingresa un numero"));
// for(let i =0; i <=10; i++){
//     let resultado = ingreso * i;
//     console.log("el producto de " + ingreso + " x " + i + "es igual a " + resultado)
// }
//let ingreso = parseInt(prompt("Ingresa un numero primo"));
//let esPrimo = true;
//for(let i= 2; i < ingreso; i++){
//if(ingreso % i == 0){
   // console.log("Ademas de dividir por 1  y por si mismo divide por: "+ i);
    //esPrimo= false
//}
//}
//if(esPrimo){
//    console.log("EL numero es primo");
//} else{
//    console.log("EL n umero no es primo")
//}






//let ingreso = prompt(
 //   "Selecciona una bebida \n 1-cafe \n 2-Te \n 3- Agua Caliente"
 //   );

//switch (ingreso) {
 //   case "1":
 //       alert("Seleccionaste cafe");
 //       break;
 //   case "2":
 //       alert("Seleccionaste Te");
 //       break;
//    case "3":
 //       alert("Seleccionaste Agua caliente");
 //       break;

 //   default:
  ////      alert("Opcion no valida")
  //      break;
//}



//function SALUDAR() {
//    console.log("Hola tqarola");
    
//}

//function SaludaConParametros(nombre="extraño") {
//   console.log("Hola " + nombre);
//}
//let nombreIgresado=prompt("Ingresa tu nombre")
//SaludaConParametros("Juan")
//SaludaConParametros("pedro")
//SaludaConParametros("1")
//SaludaConParametros("2")
//SaludaConParametros(nombreIngresado)
//SaludaConParametros()


let resultado;
function sumar(num1, num2) {
  resultado= num1 + num2
console.log(resultado);
}

let num1= parseFloat(prompt("Ingresa un numero"))
let num2= parseFloat(prompt("Ingresa un numero"))
sumar(num1, num2)
let dni= 36765496;
while (true){
    let ingreso = prompt("Ingrese su DNI para realizar su relevamiento");
    ingreso=parseInt(ingreso)
    if (ingreso===dni) {
        alert("Bienvenido Leonardo");
        break 
    } else{
    alert("Usuario no registrado")
    }
continue
}

let sueldoBruto = prompt("ingrese su sueldo");

let sueldoNeto= (sueldoBruto - sueldoBruto * 0.21);
    parseFloat(sueldoNeto);
console.log("Su sueldo despues de impuestos fijos es de $" + sueldoNeto);

let impuestoGas= prompt("Ingrese el valor de la factura de gas")
let impuestoLuz= prompt("Ingrese el valor de la factura de luz")
let impuestoTgi= prompt("Ingrese el valor de la factura de TGI")

impuestoGas = parseFloat(impuestoGas);
impuestoLuz = parseFloat(impuestoLuz);
impuestoTgi = parseFloat(impuestoTgi);

function sumaImpuestos(impuestoGas, impuestoLuz, impuestoTgi) {
    return impuestoGas + impuestoLuz + impuestoTgi;
}
let totalImpuestos = sumaImpuestos(impuestoGas, impuestoLuz, impuestoTgi)
parseFloat(totalImpuestos)
console.log("La suma de los impuestos variables es $" + totalImpuestos);

let sueldoFinal= (sueldoNeto - totalImpuestos)
parseFloat(sueldoFinal)

console.log("Restando todos sus gastos, su sueldo es de $" + sueldoFinal);

if(sueldoFinal < 0){
    alert("Cuidado, estás perdiendo dinero!!!");
}
else if(sueldoFinal===0){
    alert("Tus gastos son iguales a tu entrada de dinero, intenta disminuirlos para poder ahorrar!")
}else{
    while (sueldoFinal > 0){
    let sueldoAhorro= prompt("¿Qué porcentaje de tu excedente queres ahorrar? \n 1-10% \n 2-20% \n 3-30% \n 4-40% \n 5-50% \n 6-No quiero ahorrar")
    sueldoAhorro=parseFloat(sueldoAhorro)
    switch (sueldoAhorro) {
        case 1:
            console.log("Tus ahorros mensuales serán de $" + (sueldoFinal * 0.1) + " Disponiendo de $" + (sueldoFinal - sueldoFinal*0.1) + " restantes");
            break;
        case 2:
            console.log("Tus ahorros mensuales serán de $" + (sueldoFinal * 0.2) + " Disponiendo de $" + (sueldoFinal - sueldoFinal*0.2) + " restantes");
            break;
        case 3:
            console.log("Tus ahorros mensuales serán de $" + (sueldoFinal * 0.3) + " Disponiendo de $" + (sueldoFinal - sueldoFinal*0.3) + " restantes");
            break;
        case 4:
            console.log("Tus ahorros mensuales serán de $" + (sueldoFinal * 0.4) + " Disponiendo de $" + (sueldoFinal - sueldoFinal*0.4) + " restantes");
            break;
        case 5:
            console.log("Tus ahorros mensuales serán de $" + (sueldoFinal * 0.5) + " Disponiendo de $" + (sueldoFinal - sueldoFinal*0.5) + " restantes");
            break;
        case 6:
            alert("Recuerda que es importante disponer de ahorros siempre que puedas permitírtelo");
            break;
        default:
            alert("Opción no válida, por favor elija la cantidad que desea ahorrar");
            continue;
        }   
        break
    }   
}
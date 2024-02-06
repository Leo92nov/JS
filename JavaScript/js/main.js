let usuario= "36765496";
let pass = "starplatinum";
let intentos = 3;
let ingreso=false
function loggear() {
    for (let i = 0; i<3; i++) {
       let ingresoUsuario = prompt("Ingrese su DNI");
       let ingresoPassword = prompt("Ingrese su contraseña");
       if(ingresoUsuario== usuario && ingresoPassword ==pass){
           return true;
       }else{
           alert("Usuario o contraseña incorrecta. Intentos restantes: " + (intentos - i -1 ));
       }
   }
   return false;
}
ingreso = loggear();
if(!ingreso){
   alert ("Haz superado el numero de intentos de ionicio de sesión, por favor intentalo nuevamente mas tarde")
}else{
    alert("Bienvenido Leonardo")
    let ahorrosPasados = "265.5";
    ahorrosPasados=parseFloat(ahorrosPasados)

    let sueldoBruto = prompt("ingrese su sueldo");
    sueldoBruto=parseFloat(sueldoBruto)

    let sueldoNeto= (sueldoBruto - sueldoBruto * 0.21);
    sueldoNeto=parseFloat(sueldoNeto);

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
    totalImpuestos=parseFloat(totalImpuestos)
    console.log("La suma de los impuestos variables es $" + totalImpuestos);

    let sueldoFinal= (sueldoNeto - totalImpuestos)
    sueldoFinal=parseFloat(sueldoFinal)

    console.log("Restando todos sus gastos, su sueldo es de $" + sueldoFinal);

    let resultadoAhorro=0;
    resultadoAhorro=parseFloat(resultadoAhorro)
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
            resultadoAhorro =(sueldoFinal * 0.1)
            console.log("Tus ahorros mensuales serán de $" + (sueldoFinal * 0.1) + " Disponiendo de $" + (sueldoFinal - sueldoFinal*0.1) + " restantes");
            break;
        case 2:
            resultadoAhorro =(sueldoFinal * 0.2)
            console.log("Tus ahorros mensuales serán de $" + (sueldoFinal * 0.2) + " Disponiendo de $" + (sueldoFinal - sueldoFinal*0.2) + " restantes");
            break;
        case 3:
            resultadoAhorro =(sueldoFinal * 0.3)
            console.log("Tus ahorros mensuales serán de $" + (sueldoFinal * 0.3) + " Disponiendo de $" + (sueldoFinal - sueldoFinal*0.3) + " restantes");
            break;
        case 4:
            resultadoAhorro =(sueldoFinal * 0.4)
            console.log("Tus ahorros mensuales serán de $" + (sueldoFinal * 0.4) + " Disponiendo de $" + (sueldoFinal - sueldoFinal*0.4) + " restantes");
            break;
        case 5:
            resultadoAhorro =(sueldoFinal * 0.5)
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
    function sumaAhorros(resultadoAhorro, ahorrosPasados) {
        return resultadoAhorro + ahorrosPasados;
    }
    let totalAhorros = sumaAhorros(resultadoAhorro, ahorrosPasados)
    totalAhorros= parseFloat(totalAhorros)
    console.log("Sus ahorros actualizados suman un total de $" + (totalAhorros));
}
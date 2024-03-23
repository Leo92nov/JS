let ingresoUsuario;
let ingresoPassword;
let intentos = 3;
let ingreso = false;
let exito
let usuarioLoggeado = null
const usuarios = [
    {nombre: "Leonardo", nombreUsuario: "36765496", contraseña: "starplatinum", ahorrosPasados: 265000,  cedearsEnCartera:  [
        {id: 1, ticker: "KO", precio: 2000, cantidad: 12},
        {id: 2, ticker:"PFE", precio: 1800, cantidad: 18},
        {id: 3, ticker: "AAPL", precio: 2000, cantidad: 10},
        {id: 4, ticker: "MSFT", precio: 2000, cantidad: 27},
        {id: 5, ticker: "AMZN", precio: 2500, cantidad: 60},
        {id: 6, ticker: "META", precio: 2000, cantidad: 31},
        {id: 7, ticker: "TSLA", precio: 3000, cantidad: 15},
    ] },
    {nombre: "Leonidas", nombreUsuario: "papitomirey", contraseña: "xerxes", ahorrosPasados: 2650000, cedearsEnCartera: [
        {id: 1, ticker: "KO", precio: 2000, cantidad: 12},
        {id: 2, ticker:"PFE", precio: 1800, cantidad: 18},
        {id: 3, ticker: "AAPL", precio: 2000, cantidad: 10},
        {id: 4, ticker: "MSFT", precio: 2000, cantidad: 27},
        {id: 5, ticker: "AMZN", precio: 2500, cantidad: 60},
        {id: 6, ticker: "META", precio: 2000, cantidad: 31},
        {id: 7, ticker: "TSLA", precio: 3000, cantidad: 15},
    ]},
    {nombre: "Rolinga", nombreUsuario: "pepeluis", contraseña: "vaporlaciudad", ahorrosPasados: 285000, cedearsEnCartera: [
        {id: 1, ticker: "KO", precio: 2000, cantidad: 12},
        {id: 2, ticker:"PFE", precio: 1800, cantidad: 18},
        {id: 3, ticker: "AAPL", precio: 2000, cantidad: 10},
        {id: 4, ticker: "MSFT", precio: 2000, cantidad: 27},
        {id: 5, ticker: "AMZN", precio: 2500, cantidad: 60},
        {id: 6, ticker: "META", precio: 2000, cantidad: 31},
        {id: 7, ticker: "TSLA", precio: 3000, cantidad: 15},]},

    {nombre: "Tonatiw", nombreUsuario: "reysol", contraseña: "sacrificio", ahorrosPasados: 2650000, cedearsEnCartera: [
        {id: 1, ticker: "KO", precio: 2000, cantidad: 12},
        {id: 2, ticker:"PFE", precio: 1800, cantidad: 18},
        {id: 3, ticker: "AAPL", precio: 2000, cantidad: 10},
        {id: 4, ticker: "MSFT", precio: 2000, cantidad: 27},
        {id: 5, ticker: "AMZN", precio: 2500, cantidad: 60},
        {id: 6, ticker: "META", precio: 2000, cantidad: 31},
        {id: 7, ticker: "TSLA", precio: 3000, cantidad: 15},]},

    {nombre: "Otto", nombreUsuario: "acorazado", contraseña: "bismarck", ahorrosPasados: 25000, cedearsEnCartera: [
        {id: 1, ticker: "KO", precio: 2000, cantidad: 2},
        {id: 2, ticker:"PFE", precio: 1800, cantidad: 0},
        {id: 3, ticker: "AAPL", precio: 2000, cantidad: 8},
        {id: 4, ticker: "MSFT", precio: 2000, cantidad: 12},
        {id: 5, ticker: "AMZN", precio: 2500, cantidad: 4},
        {id: 6, ticker: "META", precio: 2000, cantidad: 1},
        {id: 7, ticker: "TSLA", precio: 3000, cantidad: 5},]},
]

const cajaDePuntas = [
    {id: 1, ticker: "KO", precio: 1500, cantidad: 5000},
    {id: 2, ticker:"PFE", precio: 1800, cantidad: 5000},
    {id: 3, ticker: "AAPL", precio: 2000, cantidad: 5000},
    {id: 4, ticker: "MSFT", precio: 2000, cantidad: 5000},
    {id: 5, ticker: "AMZN", precio: 2500, cantidad: 5000},
    {id: 6, ticker: "META", precio: 2000, cantidad: 5000},
    {id: 7, ticker: "TSLA", precio: 3000, cantidad: 5000},
    ]
    
    document.getElementById('btnEnviar').addEventListener('click', () => {
        let ingresoUsuario = document.getElementById('name').value;
        let ingresoPassword = document.getElementById('password').value;
    
        function loggear() {
            for (let i = 0; i < usuarios.length; i++) {
                if (ingresoUsuario === usuarios[i].nombreUsuario && ingresoPassword === usuarios[i].contraseña) {
                    alert("Bienvenido " + usuarios[i].nombre);
                    usuarioLoggeado= usuarios[i]
                    return usuarioLoggeado;
                    
                }

            }
            alert("Usuario o contraseña incorrecta");
            return usuarioLoggeado;
        }
       usuarioLoggeado= loggear()
       console.log(usuarioLoggeado);
       return usuarioLoggeado
    });


    let opcion;

    do {
        opcion = prompt("¿Que operacion desea realizar? \n 1-Compra de CEDEAR \n 2-Venta de CEDEAR \n 3-Ingreso de sueldo y calculadora \n 4-Extraccion/Ingreso de dinero de cuenta comitente \n 5-Salir ")
    
    switch (opcion) {
        case "1":
                function encontrarCedear(arr, nombre) {
                    return arr.find((el) => el.ticker.includes(nombre));
                }
                const encontrado = encontrarCedear(cajaDePuntas, prompt("ingrese el nombre del ticker que desea obtener").toUpperCase())
                console.log(encontrado);
               
                function comprarCedear(encontrado, cantidad) {
                    cantidad = parseInt(prompt("¿Cuantos " + encontrado.ticker + " desea adquirir?"));
                    cedearCosto = parseFloat(encontrado.precio * cantidad)
                    return  { encontrado, cantidad, cedearCosto};
                }

                let cedearProcesado = comprarCedear(encontrado)
                if (cedearProcesado.cedearCosto < ahorrosPasados) {

                    let index = cedearsEnCartera.findIndex(item => item.ticker === cedearProcesado.encontrado.ticker);
                    if (index !== -1) {
                        cedearsEnCartera[index].cantidad += cedearProcesado.cantidad;
                    }else{
                    cedearsEnCartera.push(cedearProcesado);
                    }
                                
                        ahorrosPasados = parseFloat(ahorrosPasados - cedearProcesado.cedearCosto)
                        alert("se ha realizado la compra de " + cedearProcesado.cantidad + " " + encontrado.ticker + ", " + "su dinero restante es de " + ahorrosPasados)

                    console.log(ahorrosPasados);
                    console.log(cedearsEnCartera);
                    encontrado.cantidad -= parseInt(cedearProcesado.cantidad)
                    console.log(cajaDePuntas);
                }else{
                    alert("No dispone de fondos suficientes")
                }
            break;

        
        

        case "2":
         console.log(cedearsEnCartera);

            function encontrarCedear(arr, nombre) {
                return arr.find((el) => el.ticker.includes(nombre));
            }
            
            const encontradoVender = encontrarCedear(cedearsEnCartera, prompt("ingrese el nombre del ticker que desea vender").toUpperCase())
            console.log(encontradoVender);
            
           
            function venderCedear(encontradoVender, cantidad) {
                cantidad = parseInt(prompt("¿Cuantos " + encontradoVender.ticker + " desea vender?"));
                cedearCosto = parseFloat(encontradoVender.precio * cantidad)
                return  { encontradoVender, cantidad, cedearCosto};
            }

            let cedearProcesadoVender = venderCedear(encontradoVender)
            
            let indexCedearsEnCartera = cedearsEnCartera.findIndex(item => item.ticker === cedearProcesadoVender.encontradoVender.ticker);
            if (indexCedearsEnCartera !== -1) {
                console.log("Cantidad de CEDEARs en cartera antes de la venta:", cedearsEnCartera[indexCedearsEnCartera].cantidad);
                console.log("Cantidad de CEDEARs a vender:", cedearProcesadoVender.cantidad);
                if (indexCedearsEnCartera !== -1 && cedearProcesadoVender.cantidad <= cedearsEnCartera[indexCedearsEnCartera].cantidad) {
                    let cedearsYaRestados = cedearsEnCartera[indexCedearsEnCartera].cantidad - cedearProcesadoVender.cantidad;
                    console.log(cedearsYaRestados);
                    let indexCajaDePuntas = cajaDePuntas.findIndex(item => item.ticker === cedearProcesadoVender.encontradoVender.ticker);
                
                    if (indexCajaDePuntas !== -1) {
                        cajaDePuntas[indexCajaDePuntas].cantidad += cedearProcesadoVender.cantidad;
                    } else {
                        cajaDePuntas.push({
                            id: cedearProcesadoVender.encontradoVender.id,
                            ticker: cedearProcesadoVender.encontradoVender.ticker,
                            precio: cedearProcesadoVender.encontradoVender.precio,
                            cantidad: cedearProcesadoVender.cantidad
                        });
                    }
                    
                    alert("La venta fue exitosa")
                    cedearsEnCartera[indexCedearsEnCartera].cantidad -= cedearProcesadoVender.cantidad;
                    ahorrosPasados = parseFloat(ahorrosPasados + cedearProcesadoVender.cedearCosto)
                    console.log(ahorrosPasados);
                }
                else{
                    alert("No dispones de los cedears suficientes")
                }
                console.log(cedearsEnCartera);
                console.log(cajaDePuntas);
            } else {
                alert("El cedear que deseas vender no está en tu cartera.");
            }
        break;


        case "3":
            console.log("Su cuenta comitente dispone de $" + ahorrosPasados);
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
        
            function sumaAhorros(resultadoAhorro, ahorrosPasados) {
                return resultadoAhorro + ahorrosPasados;
            }
            let totalAhorros = sumaAhorros(resultadoAhorro, ahorrosPasados)
            totalAhorros= parseFloat(totalAhorros)
            console.log("Sus ahorros actualizados suman un total de $" + (totalAhorros));

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

            break;

        case "4":
         let operacion = prompt ("Usted dispone de $" + ahorrosPasados + " en su cuenta, si desea ingresar mas diunero escriba ¨Ingreso¨. Si desea realizar una extraccion escriba ¨Extraccion¨")
            if (operacion === "ingreso"){
                alert("Envie dinero desde su cuenta bancaria a la siguiente cuenta ¨1430001713021232020013¨")
            }else if (operacion === "extraccion"){
                extraccion = prompt("usted dispone de $" + ahorrosPasados + " ¿cuanto desea retirar?")
                if(extraccion > ahorrosPasados){
                    alert("No dispone de esa cantidad")
                }else{
                  ahorrosPasados = ahorrosPasados - extraccion
                    alert("Su dinero ha sido correctamente enviado. Su saldo restante es de $" + ahorrosPasados + ".")
                }
            }else{
                alert("Opccion no valida")
            }

        break
        default: alert("opcion no valida")
        
        case "5":
            alert("Saludos") 
    }
} while (opcion !== "5");

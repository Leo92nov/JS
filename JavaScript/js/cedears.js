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
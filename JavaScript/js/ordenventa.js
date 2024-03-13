let usuarioLoggeado = JSON.parse(localStorage.getItem("iniciado"));
const cedeart = JSON.parse(localStorage.getItem("Orden de venta"))
console.log(cedeart);

const comitente = document.getElementById("comitente");
const cedearVender = document.getElementById("cedearVender");
const cantidadOV = document.getElementById("cantidadOV");
const precioOV = document.getElementById("precioOV");
const importeTotalOV = document.getElementById("importeTotalOV");
const btnVentaOV = document.getElementById("btnVentaOV");


comitente.value = usuarioLoggeado.numeroCcomitente;
console.log(usuarioLoggeado.numeroCcomitente);
cedearVender.value = cedeart.ticker

cantidadOV.value = cedeart.cantidad
precioOV.value = cedeart.precio
importeTotalOV.value = precioOV.value * cantidadOV.value


btnVentaOV.addEventListener("click", function enviarOrdenV() {
    const cantidadCedear = parseFloat(cantidadOV.value);
    const importeTotal = parseFloat(importeTotalOV.value);

    if (cantidadCedear <= cedeart.cantidad) {
       
        usuarioLoggeado.cedearsEnCartera.forEach(function(cedear) {
            if (cedear.ticker === cedeart.ticker) {
                
                cedear.cantidad -= cantidadCedear;
                return; 
            }
        });
        
        
        usuarioLoggeado.ahorrosPasados += importeTotal;
        
        console.log(usuarioLoggeado.ahorrosPasados);
    } else {
        alert("La venta no se puede realizar. La cantidad ingresada es mayor a la cantidad en la cartera.");
    }
    console.log(usuarioLoggeado);
});

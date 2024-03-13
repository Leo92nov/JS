let usuarioLoggeado = JSON.parse(localStorage.getItem("iniciado"));
const cedeart = JSON.parse(localStorage.getItem("Orden de venta"));
console.log(cedeart);

const comitente = document.getElementById("comitente");
const cedearComprar = document.getElementById("cedearComprar");
const cantidadCP = document.getElementById("cantidadCP");
const precioCP = document.getElementById("precioCP");
const importeTotalCP = document.getElementById("importeTotalCP");
const btnCompraCP = document.getElementById("btnCompraCP");

comitente.value = usuarioLoggeado.numeroCcomitente;
cedearComprar.value = cedeart.ticker;
cantidadCP.value = cedeart.cantidad;
precioCP.value = cedeart.precio;
importeTotalCP.value = precioCP.value * cantidadCP.value;

btnCompraCP.addEventListener("click", function enviarOrdenV() {
    const cantidadCedear = parseFloat(cantidadCP.value);
    const importeTotal = parseFloat(importeTotalCP.value);

    if ((cedeart.precio * cantidadCedear) <= usuarioLoggeado.ahorrosPasados) {
        usuarioLoggeado.cedearsEnCartera.forEach(function(cedear) {
            if (cedear.ticker === cedeart.ticker) {
                cedear.cantidad += cantidadCedear;
                return; 
            }
        });
        
        usuarioLoggeado.ahorrosPasados -= importeTotal;
        console.log(usuarioLoggeado.ahorrosPasados);
    } else {
        alert("La compra no se puede realizar. El importe total es mayor a la cantidad en ahorros pasados.");
    }
    console.log(usuarioLoggeado);
});
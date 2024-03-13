let usuarioLoggeado = JSON.parse(localStorage.getItem("iniciado"));
const cedeart = JSON.parse(localStorage.getItem("Orden de venta"));
const cajaDePuntas = JSON.parse(localStorage.getItem("cajadepuntas"));

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
        let pozoV = cajaDePuntas[0].pozo;
        
        let luzu = importeTotal + pozoV;
        
        if (cedeart.ticker === cajaDePuntas[0].ticker) {
            cajaDePuntas[0].cantidad = cantidadCedear;
            
            
            pozoV += importeTotal;
            cajaDePuntas[0].pozo = pozoV; 
        }

        
        localStorage.setItem("cajadepuntas", JSON.stringify(cajaDePuntas));

    } else {
        alert("La compra no se puede realizar. El importe total es mayor a la cantidad en ahorros pasados.");
    }
    console.log(usuarioLoggeado);
});
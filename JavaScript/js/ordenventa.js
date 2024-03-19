let usuarioLoggeado = JSON.parse(sessionStorage.getItem("iniciado"));
const {cedearsEnCartera, ahorrosPasados, numeroCcomitente} = usuarioLoggeado


const cedeart = JSON.parse(localStorage.getItem("Orden de venta"))
const cajaDePuntas = JSON.parse(localStorage.getItem("cajadepuntas"));

const comitente = document.getElementById("comitente");
const cedearVender = document.getElementById("cedearVender");
const cantidadOV = document.getElementById("cantidadOV");
const precioOV = document.getElementById("precioOV");
const importeTotalOV = document.getElementById("importeTotalOV");
const btnVentaOV = document.getElementById("btnVentaOV");

const {ticker, cantidad, precio} = cedeart

comitente.value = numeroCcomitente;

cedearVender.value = ticker

cantidadOV.value = cantidad
precioOV.value = precio
importeTotalOV.value = precioOV.value * cantidadOV.value

OrdenVentaCaja = {}

btnVentaOV.addEventListener("click", function enviarOrdenV() {
    const cantidadCedear = parseFloat(cantidadOV.value);
    const importeTotal = parseFloat(importeTotalOV.value);

    if (cantidadCedear <= cantidad) {
       
        usuarioLoggeado.cedearsEnCartera.forEach(function(cedear) {
            if (usuarioLoggeado.cedearsEnCartera.cantidad < 0) {
                alert("No es posible realizar operacion")
                
            }
        });
        let ordenVentaCaja = {
            ticker: ticker,
            cantidad: cantidad,
            precio: precio,
            numeroComitente: numeroCcomitente 
        };
        console.log(ordenVentaCaja);
        ordenVentaCaja = JSON.stringify(ordenVentaCaja);
        localStorage.setItem("ordenVenta", ordenVentaCaja)
        window.location.href = "./inicio.html"
    } else {
        alert("La orden de venta no se puede realizar. La cantidad ingresada es mayor a la cantidad en la cartera.");
    }

});


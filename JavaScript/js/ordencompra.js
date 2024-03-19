let usuarioLoggeado = JSON.parse(sessionStorage.getItem("iniciado"));

const {ahorrosPasados, numeroCcomitente, cedearsEnCartera} = usuarioLoggeado

const cedearJSON = JSON.parse(localStorage.getItem("cajadepuntas"));
cedearTickerAComprar = cedearJSON.ticker;


const cajaDePuntas = JSON.parse(localStorage.getItem("cajadepuntas"));

const comitente = document.getElementById("comitente");
comitente.value = numeroCcomitente
let cedearComprar = document.getElementById("cedearComprar");

const cantidadCPInput = document.getElementById("cantidadCP");
let precioCPInput = document.getElementById("precioCP");
let importeTotalCP = document.getElementById("importeTotalCP");

function actualizarImporteTotal() {
    const cantidadCP = parseInt(cantidadCPInput.value) || 0;
    const precioCP = parseInt(precioCPInput.value) || 0;
    
    const importeTotal = cantidadCP * precioCP;
    
    importeTotalCP.value = importeTotal;
    
}

cantidadCPInput.addEventListener("keyup", actualizarImporteTotal);
precioCPInput.addEventListener("keyup", actualizarImporteTotal);


cedearDeUsuario = cedearsEnCartera


compraCantidadCED = parseInt(cedearJSON.cantidad);
precioCompra = cedearJSON.precio;

let pozoCP = parseFloat(cajaDePuntas[0].pozo);

btnCompraCP.addEventListener("click", function enviarOrdenV() {
    if ((precioCPInput.value * cantidadCPInput.value) <= usuarioLoggeado.ahorrosPasados) {
        usuarioLoggeado.cedearsEnCartera.forEach(function(cedearDeUsuario) {
            if (cedearDeUsuario.ticker === cedearTickerAComprar) {
                cedearDeUsuario.cantidad += compraCantidadCED;
                return; 
            }
        });
        
        usuarioLoggeado.ahorrosPasados -= importeTotalCP.value;
        
        if (cedearJSON.ticker === cajaDePuntas.ticker) {
            let pozoV = parseFloat(importeTotalCP.value) + pozoCP;
            pozoCP = pozoV;

            
            cajaDePuntas[0].pozo = pozoCP;
        }

       
        localStorage.setItem("cajadepuntas", JSON.stringify(cajaDePuntas));
        console.log(JSON.parse(localStorage.getItem("cajadepuntas")));
        console.log(usuarioLoggeado);
    } else {
        alert("La compra no se puede realizar. El importe total es mayor a la cantidad en ahorros pasados.");
    }
});
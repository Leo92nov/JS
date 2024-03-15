let usuarioLoggeado = JSON.parse(sessionStorage.getItem("iniciado"))
const liquido = document.getElementById("liquidezEnCuenta")
liquido.textContent = JSON.parse(sessionStorage.getItem("iniciado")).ahorrosPasados;
const usuarioJSON = JSON.parse(sessionStorage.getItem("iniciado"))
console.log(usuarioJSON);
console.log(liquido);

const numero__comitente = document.getElementById("numero__comitente");
numero__comitente.textContent = JSON.parse(sessionStorage.getItem("iniciado")).numeroCcomitente;

let sumaInversion =0;
usuarioLoggeado.cedearsEnCartera.forEach(cedear => {
    sumaInversion += cedear.precio * cedear.cantidad;
});
console.log(sumaInversion);
const din__invertido = document.getElementById("din__invertido");
din__invertido.textContent = sumaInversion;

const cedearsEnCartera = usuarioLoggeado.cedearsEnCartera;
const contenedorCedears = document.getElementById("contenedorCedears");

cedearsEnCartera.forEach(cedear => {
    const cedearElemento = document.createElement("div");
    cedearElemento.classList.add("cedear");

    const nombreTicker = document.createElement("p");
    nombreTicker.textContent = `Ticker: ${cedear.ticker}`;
    

    const precio = document.createElement("p");
    precio.textContent = `Precio: ${cedear.precio}`;
   

    const cantidad = document.createElement("p");
    cantidad.textContent = `Cantidad: ${cedear.cantidad}`;
    

 
    const comprarCed = document.createElement("button");
    comprarCed.textContent = "Comprar";
    comprarCed.classList.add("btnCompraCed");
    
    const venderCed = document.createElement("button");
    venderCed.textContent = "Vender";
    console.log("Vendiendo CEDEAR:", cedear.ticker);
    venderCed.classList.add("btnVentaCed");
    
   
    venderCed.addEventListener("click", function() {
        console.log("Vendiendo CEDEAR:", cedear);
        let cedeart = JSON.stringify(cedear);
        localStorage.setItem("Orden de venta", cedeart)
        window.open("http://127.0.0.1:5500/JavaScript/pages/oredendeventa.html", "VentaCEDEAR", "width=800,height=600");
    });

    comprarCed.addEventListener("click", function() {
        console.log("Comprando CEDEAR:", cedear);
        let cedeart = JSON.stringify(cedear);
        localStorage.setItem("Orden de compra", cedeart)
        window.open("http://127.0.0.1:5500/JavaScript/pages/ordencompra.html", "CompraCedear", "width=800,height=600");
    });  

    contenedorCedears.appendChild(nombreTicker);
    contenedorCedears.appendChild(precio);
    contenedorCedears.appendChild(cantidad);
    contenedorCedears.appendChild(venderCed);
    contenedorCedears.appendChild(comprarCed);
    contenedorCedears.appendChild(cedearElemento);
});


let ingresoUsuario;
let ingresoPassword;
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

const btnIngreso = document.getElementById("btnIngreso");
const inputUsuario = document.getElementById("name");
const inputContraseña = document.getElementById("password");

btnIngreso.addEventListener("click", function ingreso() {
    const nombreUsuario = inputUsuario.value;
    const contraseñaUsuario = inputContraseña.value;

    function validarCredenciales(nombreUsuario, contraseña) {
        const usuarioEncontrado = usuarios.find(usuario => usuario.nombreUsuario === nombreUsuario && usuario.contraseña === contraseña);
        return usuarioEncontrado;
    }
    
    const usuarioLoggeado = validarCredenciales(nombreUsuario, contraseñaUsuario);

    if (usuarioLoggeado) {
        alert("Bienvenido, " + usuarioLoggeado.nombre);
        console.log(usuarioLoggeado.cedearsEnCartera);
        let liquidezUsuario = usuarioLoggeado.ahorrosPasados
        console.log(liquidezUsuario);
        /* window.location.href = "http://127.0.0.1:5500/JavaScript/pages/calculadoraAhorros.html" */
    } else {
        alert("Contraseña o usuario incorrectos");
    }
    const datosUsuario = {
        nombre: usuarioLoggeado.nombre,
        cedearsEnCartera: usuarioLoggeado.cedearsEnCartera,
        ahorrosPasados: usuarioLoggeado.ahorrosPasados,
        // Agrega más propiedades según sea necesario
    };
    const datosUsuarioJSON = JSON.stringify(datosUsuario);

        // Guardar los datos JSON en localStorage o enviarlos a un servidor
        localStorage.setItem("usuarioLoggeado", datosUsuarioJSON);
});






const cajaDePuntas = [
    {id: 1, ticker: "KO", precio: 1500, cantidad: 5000},
    {id: 2, ticker:"PFE", precio: 1800, cantidad: 5000},
    {id: 3, ticker: "AAPL", precio: 2000, cantidad: 5000},
    {id: 4, ticker: "MSFT", precio: 2000, cantidad: 5000},
    {id: 5, ticker: "AMZN", precio: 2500, cantidad: 5000},
    {id: 6, ticker: "META", precio: 2000, cantidad: 5000},
    {id: 7, ticker: "TSLA", precio: 3000, cantidad: 5000},
    ]
const aVender = []

    function ordenarVender(aVender, usuarios){
        aVender.push(usuarios[0].cedearsEnCartera[1]) 
    }
    let aOrdendeVCenta = ordenarVender(aVender, usuarios)
console.log(aVender);



/*     let cartera = usuarios[0].cedearsEnCartera
    console.log(cartera);
    cualCedear = prompt("cual queres vender?" + usuarios[0].cedearsEnCartera.ticker) */

 /*    function ordenVenta(cajaDePuntas, cant, precio){
        cajaDePuntas.push(cartera)
        cualCedear = prompt("cual queres vender?" + cedearsEnCartera.ticker)
        cuantosCedears = prompt("cuantos queres vender" + ) 

    } */
  /*   function venderCedear(objet, arr) {
        console.log(usuarios.cedearsEnCartera.ticker);
       objet = usuarios.cedearsEnCartera.ticker
       arr = cajaDePuntas

       cajaDePuntas.push({
        id: cedearProcesadoVender.encontradoVender.id,
        ticker: cedearProcesadoVender.encontradoVender.ticker,
        precio: cedearProcesadoVender.encontradoVender.precio,
        cantidad: cedearProcesadoVender.cantidad
    });
    }

    venderCedear(prompt("que cedear queres vender?"), cajaDePuntas) */
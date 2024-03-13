let ingresoUsuario;
let ingresoPassword;
let cajaDePuntas = [
    {pozo: 500000},
    {id: 1, ticker: "KO", precio: 1500, cantidad: 5000},
    {id: 2, ticker:"PFE", precio: 1800, cantidad: 5000},
    {id: 3, ticker: "AAPL", precio: 2000, cantidad: 5000},
    {id: 4, ticker: "MSFT", precio: 2000, cantidad: 5000},
    {id: 5, ticker: "AMZN", precio: 2500, cantidad: 5000},
    {id: 6, ticker: "META", precio: 2000, cantidad: 5000},
    {id: 7, ticker: "TSLA", precio: 3000, cantidad: 5000},
    
    ]

    cajaDePuntas = JSON.stringify(cajaDePuntas);
    localStorage.setItem("cajadepuntas", cajaDePuntas)

const usuarios = [
    {nombre: "Leonardo", nombreUsuario: "36765496", contraseña: "starplatinum", ahorrosPasados: 265000, numeroCcomitente: 54687879,  cedearsEnCartera:  [
        {id: 1, ticker: "KO", precio: 2000, cantidad: 12},
        {id: 2, ticker:"PFE", precio: 1800, cantidad: 18},
        {id: 3, ticker: "AAPL", precio: 2000, cantidad: 10},
        {id: 4, ticker: "MSFT", precio: 2000, cantidad: 27},
        {id: 5, ticker: "AMZN", precio: 2500, cantidad: 60},
        {id: 6, ticker: "META", precio: 2000, cantidad: 31},
        {id: 7, ticker: "TSLA", precio: 3000, cantidad: 15},
    ] },
    {nombre: "Leonidas", nombreUsuario: "papitomirey", contraseña: "xerxes", ahorrosPasados: 2650000, numeroCcomitente: 54687880, cedearsEnCartera: [
        {id: 1, ticker: "KO", precio: 2000, cantidad: 12},
        {id: 2, ticker:"PFE", precio: 1800, cantidad: 18},
        {id: 3, ticker: "AAPL", precio: 2000, cantidad: 10},
        {id: 4, ticker: "MSFT", precio: 2000, cantidad: 27},
        {id: 5, ticker: "AMZN", precio: 2500, cantidad: 60},
        {id: 6, ticker: "META", precio: 2000, cantidad: 31},
        {id: 7, ticker: "TSLA", precio: 3000, cantidad: 15},
    ]},
    {nombre: "Rolinga", nombreUsuario: "pepeluis", contraseña: "vaporlaciudad", ahorrosPasados: 285000, numeroCcomitente: 54687881, cedearsEnCartera: [
        {id: 1, ticker: "KO", precio: 2000, cantidad: 12},
        {id: 2, ticker:"PFE", precio: 1800, cantidad: 18},
        {id: 3, ticker: "AAPL", precio: 2000, cantidad: 10},
        {id: 4, ticker: "MSFT", precio: 2000, cantidad: 27},
        {id: 5, ticker: "AMZN", precio: 2500, cantidad: 60},
        {id: 6, ticker: "META", precio: 2000, cantidad: 31},
        {id: 7, ticker: "TSLA", precio: 3000, cantidad: 15},]},

    {nombre: "Tonatiw", nombreUsuario: "reysol", contraseña: "sacrificio", ahorrosPasados: 2650000, numeroCcomitente: 54687882, cedearsEnCartera: [
        {id: 1, ticker: "KO", precio: 2000, cantidad: 12},
        {id: 2, ticker:"PFE", precio: 1800, cantidad: 18},
        {id: 3, ticker: "AAPL", precio: 2000, cantidad: 10},
        {id: 4, ticker: "MSFT", precio: 2000, cantidad: 27},
        {id: 5, ticker: "AMZN", precio: 2500, cantidad: 60},
        {id: 6, ticker: "META", precio: 2000, cantidad: 31},
        {id: 7, ticker: "TSLA", precio: 3000, cantidad: 15},]},

    {nombre: "Otto", nombreUsuario: "acorazado", contraseña: "bismarck", ahorrosPasados: 25000, numeroCcomitente: 54687883, cedearsEnCartera: [
        {id: 1, ticker: "KO", precio: 2000, cantidad: 2},
        {id: 2, ticker:"PFE", precio: 1800, cantidad: 0},
        {id: 3, ticker: "AAPL", precio: 2000, cantidad: 8},
        {id: 4, ticker: "MSFT", precio: 2000, cantidad: 12},
        {id: 5, ticker: "AMZN", precio: 2500, cantidad: 4},
        {id: 6, ticker: "META", precio: 2000, cantidad: 1},
        {id: 7, ticker: "TSLA", precio: 3000, cantidad: 5},]},
]

const btnIngreso = document.getElementById("formulario");
const inputUsuario = document.getElementById("name");
const inputContraseña = document.getElementById("password");


btnIngreso.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputUsuario = e.target[0].value
    const inputContraseña = e.target[1].value
    function validarCredenciales(nombreUsuario, contraseña) {
        return usuarios.find((usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contraseña === contraseña);
    } 
 const usuarioValidado = validarCredenciales(inputUsuario, inputContraseña);

 if (usuarioValidado) {
        let liquidezUsuario = usuarioValidado.ahorrosPasados;
        console.log(liquidezUsuario);

        const usuarioValidadoJson = JSON.stringify(usuarioValidado);
        sessionStorage.setItem("iniciado", usuarioValidadoJson)
        console.log(usuarioValidado);
        window.location.href = "http://127.0.0.1:5500/JavaScript/pages/Inicio.html";
    } else {
        alert("Contraseña o usuario incorrectos");
    } 
});


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
    {id: 8, ticker: "LMT", precio: 8000, cantidad: 5000},
    {id: 9, ticker: "V", precio: 3800, cantidad: 5000},
    {id: 10, ticker: "PBR", precio: 5000, cantidad: 5000},
    {id: 11, ticker: "PYPL", precio: 2500, cantidad: 5000},
    {id: 12, ticker: "CVX", precio: 4000, cantidad: 5000},
    {id: 13, ticker: "HSY", precio: 4500, cantidad: 5000},
    {id: 14, ticker: "MCD", precio: 2000, cantidad: 5000},
    {id: 16, ticker: "MO", precio: 2600, cantidad: 5000},
    {id: 17, ticker: "JNJ", precio: 3600, cantidad: 5000},
    {id: 18, ticker: "PEP", precio: 5600, cantidad: 5000},
    {id: 19, ticker: "O", precio: 8600, cantidad: 5000},
    {id: 20, ticker: "CAT", precio: 7600, cantidad: 5000},
    {id: 21, ticker: "COST", precio: 2600, cantidad: 5000},
    {id: 22, ticker: "SBUX", precio: 2950, cantidad: 5000},
    ]

    cajaDePuntas = JSON.stringify(cajaDePuntas);
    localStorage.setItem("cajadepuntas", cajaDePuntas)

usuarios = JSON.parse(localStorage.getItem("suarios"))

if (usuarios === null) {
    let usuarios = [
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
let usuariosJ = JSON.stringify(usuarios)
    localStorage.setItem("suarios", usuariosJ)
}

    

const btnIngreso = document.getElementById("btnIngreso");
const inputUsuario = document.getElementById("name");
const inputContraseña = document.getElementById("password");



btnIngreso.addEventListener("click", (e) => {
    e.preventDefault();
    const inputUsuario = document.getElementById("name").value;
    const inputContraseña = document.getElementById("password").value;

    function validarCredenciales(nombreUsuario, contraseña) {
        return usuarios.find((usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contraseña === contraseña);
    } 

    const usuarioValidado = validarCredenciales(inputUsuario, inputContraseña);

    if (usuarioValidado) {
        let liquidezUsuario = usuarioValidado.ahorrosPasados;
        console.log(liquidezUsuario);

        const usuarioValidadoJson = JSON.stringify(usuarioValidado);
        sessionStorage.setItem("iniciado", usuarioValidadoJson);
        console.log(usuarioValidado);
        location.href = "./pages/inicio.html"
    } else {
        document.getElementById("mensajeUsuario").textContent = "Usuario o contraseña incorrecto";
    } 
});

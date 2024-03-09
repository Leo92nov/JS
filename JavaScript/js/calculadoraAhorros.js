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
]

ahorrosPasados = usuarios[0].ahorrosPasados;
console.log(ahorrosPasados);
console.log("Su cuenta comitente dispone de $" + ahorrosPasados);
ahorrosPasados=parseFloat(ahorrosPasados);

let sueldoNetoCalculado;
function sueldoNeto(sueldoBruto, gas, luz, agua, patente, seguroAutomotor, alquiler, obraSocial, tgi) {
    return sueldoBruto - gas - luz - agua - patente - seguroAutomotor - alquiler - obraSocial - tgi;
}


const sueldoBrutoInput = document.getElementById("sueldo");
const gasInput = document.getElementById("gas");
const luzInput = document.getElementById("luz");
const aguaInput = document.getElementById("agua");
const patenteInput = document.getElementById("patente");
const seguroAutomotorInput = document.getElementById("seguroAutomotor");
const alquilerInput = document.getElementById("alquiler");
const obraSocialInput = document.getElementById("obraSocial");
const tgiInput = document.getElementById("tgi");

const btnCalcSn = document.getElementById("btnCalcSn");
const resultadoNeto = document.getElementById("resultadoNeto")

btnCalcSn.addEventListener("click", function calcularAhorro() {
    const sueldoBruto = parseFloat(sueldoBrutoInput.value) || 0;
    const gas = parseFloat(gasInput.value) || 0;
    const luz = parseFloat(luzInput.value) || 0;
    const agua = parseFloat(aguaInput.value) || 0;
    const patente = parseFloat(patenteInput.value) || 0;
    const seguroAutomotor = parseFloat(seguroAutomotorInput.value) || 0;
    const alquiler = parseFloat(alquilerInput.value) || 0;
    const obraSocial = parseFloat(obraSocialInput.value) || 0;
    const tgi = parseFloat(tgiInput.value) || 0;
    
    const sueldoNetoCalculado  = sueldoNeto (sueldoBruto, gas, luz, agua, patente, seguroAutomotor, alquiler, obraSocial, tgi)
    resultadoNeto.value = sueldoNetoCalculado
});

porcentajeValor = document.getElementById("porcentaje")
resultadox = document.getElementById("resultadoNeto")
function calcularSueldoNeto(sueldoBruto, gas, luz, agua, patente, seguroAutomotor, alquiler, obraSocial, tgi){
    return (sueldoBruto - gas - luz - agua - patente - seguroAutomotor - alquiler - obraSocial - tgi)
}

function porcentuar(resultadoNeto, porcentaje) {

    let reto = (resultadoNeto * porcentaje) / 100;
    return reto;
}

btnInver.addEventListener("click", function() {
    const resultadoNeto = document.getElementById("resultadoNeto").value;
    const porcentajeInversion = document.getElementById("porcentaje").value;
    const porcentajeValor = parseFloat(porcentajeInversion);
   
    const inversionCalculada = porcentuar(resultadoNeto, porcentajeValor);
    
    inversion.value = inversionCalculada.toFixed(2); // Redondear a 2 decimales
});
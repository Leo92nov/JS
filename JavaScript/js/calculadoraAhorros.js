
usuarioLoggeado =JSON.parse(sessionStorage.getItem("iniciado"))


ahorrosPasados = usuarioLoggeado.ahorrosPasados
console.log(ahorrosPasados);
console.log("Su cuenta comitente dispone de $" + ahorrosPasados);
ahorrosPasados=parseFloat(ahorrosPasados);

const sueldo = document.getElementById("sueldoc");
const boton__ahorros = document.getElementById("boton__ahorros");

boton__ahorros.addEventListener("click", function traerLiquidez() {
    sueldo.value = usuarioLoggeado.ahorrosPasados; 
});

let sueldoNetoCalculado;
function sueldoNeto(sueldoBruto, gas, luz, agua, patente, seguroAutomotor, alquiler, obraSocial, tgi) {
    return sueldoBruto - gas - luz - agua - patente - seguroAutomotor - alquiler - obraSocial - tgi;
}



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
    const sueldoBruto = parseFloat(sueldo.value) || 0;
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
   
    let inversionCalculada = porcentuar(resultadoNeto, porcentajeValor);
    
    inversion.value = inversionCalculada.toFixed(2); 

    let inversionCalculaa = JSON.stringify(inversionCalculada);
        sessionStorage.setItem("Inversion", inversionCalculaa);
});
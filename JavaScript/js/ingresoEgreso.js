const usuarioLoggeado = JSON.parse(sessionStorage.getItem("iniciado"));
const btnLiqMax = document.getElementById("btnLiqMax");
const btnEnviar = document.getElementById("btnEgreso");
let liqEg = document.getElementById("liqEg");
const passwordEg = document.getElementById("passwordEg");
const contraseña = JSON.parse(sessionStorage.getItem("iniciado")).contraseña;

liqEg.value = JSON.parse(sessionStorage.getItem("Inversion"));


btnLiqMax.addEventListener("click", function liquidezMaxima() {
    const ahorrosPasados = JSON.parse(sessionStorage.getItem("iniciado")).ahorrosPasados;
    liqEg.value = ahorrosPasados;
});

btnEnviar.addEventListener("click", function envdinero(){
    const dineroEnviar = parseFloat(liqEg.value); 
    const contraseña = JSON.parse(sessionStorage.getItem("iniciado")).contraseña;
    const ahorrosPasados = parseFloat(JSON.parse(sessionStorage.getItem("iniciado")).ahorrosPasados);

    if (contraseña === passwordEg.value && dineroEnviar <= usuarioLoggeado.ahorrosPasados) {
        const edc = "envio exitoso";
        console.log(edc);
        const dineroRestante = usuarioLoggeado.ahorrosPasados - dineroEnviar; 
        console.log(dineroRestante);
    } else{
        alert("Envío inválido"); 
    }
});
console.log(JSON.parse(sessionStorage.getItem("iniciado")));


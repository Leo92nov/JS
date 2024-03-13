const btnLiqMax = document.getElementById("btnLiqMax");
const btnEnviar = document.getElementById("btnEgreso");
const liqEg = document.getElementById("liqEg");
const passwordEg = document.getElementById("passwordEg");

btnLiqMax.addEventListener("click", function liquidezMaxima() {
    const ahorrosPasados = JSON.parse(localStorage.getItem("iniciado")).ahorrosPasados;
    liqEg.value = ahorrosPasados;
});

btnEnviar.addEventListener("click", function envdinero(){
    const dineroEnviar = parseFloat(liqEg.value); 
    const contraseña = JSON.parse(localStorage.getItem("iniciado")).contraseña;
    const ahorrosPasados = parseFloat(JSON.parse(localStorage.getItem("iniciado")).ahorrosPasados);

    if (contraseña === passwordEg.value && dineroEnviar >= ahorrosPasados) {
        const edc = "envio exitoso";
        console.log(edc);
        const dineroRestante = ahorrosPasados - dineroEnviar; 
        console.log(dineroRestante);
    } else {
        alert("Envío inválido"); 
    }
});
console.log(JSON.parse(localStorage.getItem("iniciado")));


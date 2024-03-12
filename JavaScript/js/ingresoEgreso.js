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

    if (contraseña === passwordEg.value && dineroEnviar <= ahorrosPasados) {
        const edc = "envio exitoso";
        console.log(edc);
        const dineroRestante = ahorrosPasados - dineroEnviar; 
        
    } else {
        alert("Envío inválido"); 
    }
});
console.log(JSON.parse(localStorage.getItem("iniciado")));

/* let operacion = prompt ("Usted dispone de $" + ahorrosPasados + " en su cuenta, si desea ingresar mas diunero escriba ¨Ingreso¨. Si desea realizar una extraccion escriba ¨Extraccion¨")
if (operacion === "ingreso"){
    alert("Envie dinero desde su cuenta bancaria a la siguiente cuenta ¨1430001713021232020013¨")
}else if (operacion === "extraccion"){
    extraccion = prompt("usted dispone de $" + ahorrosPasados + " ¿cuanto desea retirar?")
    if(extraccion > ahorrosPasados){
        alert("No dispone de esa cantidad")
    }else{
      ahorrosPasados = ahorrosPasados - extraccion
        alert("Su dinero ha sido correctamente enviado. Su saldo restante es de $" + ahorrosPasados + ".")
    }
}else{
    alert("Opccion no valida")
} */
let operacion = prompt ("Usted dispone de $" + ahorrosPasados + " en su cuenta, si desea ingresar mas diunero escriba ¨Ingreso¨. Si desea realizar una extraccion escriba ¨Extraccion¨")
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
}
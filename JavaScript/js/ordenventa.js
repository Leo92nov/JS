let usuarioLoggeado = JSON.parse(localStorage.getItem("iniciado"));

const comitente = document.getElementById("comitente");
const cedearVender = document.getElementById("cedearVender");
const cantidadOV = document.getElementById("cantidadOV");
const precioOV = document.getElementById("precioOV");
const importeTotalOV = document.getElementById("importeTotalOV");
const btnVentaOV = document.getElementById("btnVentaOV");


comitente.value = usuarioLoggeado.numeroCcomitente;
console.log(usuarioLoggeado.numeroCcomitente);


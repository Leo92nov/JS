/* function cucatrap(raid) {
    console.log("me atacan con " + raid);
}

cucatrap("RAAAAAID")


let vidaMax= 100

function regenAl(regen) {
    console.log("Leon recupera " + regen);  
    return regen 
}


function ataqueEn(daño) {
    console.log("el ataque es de " + daño);
    return daño
}

vidaActual = (vidaMax - ataqueEn(25))

console.log("A Leon le restan " + vidaActual);

vidaActual = (vidaActual + regenAl(15));

console.log("Leon recupera 15pv. PV:" + vidaActual + "/" + vidaMax); */

/* let vidaMax = 100
let vidaEscorpion = 200

console.log("Escorpion lanza un ataque");

function dañoAParty(daño) {
    console.log("Leon recibe " + daño + " de daño");
    return daño
}

let vidaActual = vidaMax - dañoAParty(21)

console.log("a leon le restan " + vidaActual + " PVs");

console.log("Leon ataca con su Espada");

function dañoAEne(dañoe) {
    console.log("Escorpion recibe " + dañoe + " de daño");
    return dañoe
}

let vidaEscorpionAC = vidaEscorpion - dañoAEne(15)

console.log("A escoprpion le restan " + vidaEscorpionAC + " PVs");

const inventarioLeon = {
    arma:"espada",
    armaduras:"ropas de cuero",
    pociones: "curacion 1",
    armaSecundaria: "daga",
}
console.log(inventarioLeon);

const inventarioMia = {
    arma:"baculo",
    armaduras:"ropas de seda",
    pociones: "curacion mana",
    armaSecundaria: "daga",
}

console.log(inventarioMia);

let setArmas = inventarioLeon.arma + ", " + inventarioLeon.armaSecundaria

console.log(setArmas);

inventarioMia.armaSecundaria = "libro"

console.log(inventarioMia);

function Personaje(nombre, edad, nivel, clase) {
    this.nombre = nombre;
    this.edad = edad;
    this.nivel = nivel;
    this.clase = clase;
}

const principal = new Personaje("Leon", "17", 1, "Guerrero")
console.log(principal);

const pjmia = new Personaje("Mia", "16", 2, "clériga")
console.log(pjmia);

console.log("Leon abre cofre. Leon encuentra baculo magico, baculo magico pasa a mia");

inventarioMia.arma = "baculo magico"

console.log(inventarioMia);

console.log("arma" in inventarioLeon);


for (const key in inventarioLeon){
    console.log(key + ": " + inventarioLeon[key]);
}
    
const bolsaObjetos= ["hierba", "espada", "escudo bronce", "botas de cuero"]

console.log(bolsaObjetos[2]);

bolsaObjetos.push("camisa elfica", "manzana")
console.log(bolsaObjetos);

for(let i =0; i<bolsaObjetos.length; i++){
    console.log(bolsaObjetos[i]);
}

bolsaObjetos.unshift("vizcaina")
console.log(bolsaObjetos);
bolsaObjetos.splice(0,2)
console.log(bolsaObjetos);

const totalInve= bolsaObjetos.concat(inventarioMia)
console.log(totalInve);
console.log(bolsaObjetos.includes("espada"));

function (params) {
    
} */ 

/* function set(casco, pechera, guantes, grebas, botas) {
    this.casco = casco,
    this.pechera = pechera,
    this.guantes = guantes,
    this.grebas = grebas,
    this.botas = botas;
}

for (let i = 0; i<3; i++){
const set1 = new set(prompt("que tipo de casco?"), prompt("que tipo de pechera?"), prompt("que tipo de guantes"), prompt("que tipop de grebas?"), prompt("que tipo de botas?"))
console.log(set1);} */

/* function Inventarios(casco, armadura, botas, arma) {
    this. casco=casco
    this. armadura=armadura
    this. botas=botas
    this. arma=arma
}

let invetarioHans= alert("Seleccione el inventario de Hans") +
     Inventarios(prompt("seleccione el casco"),
     prompt("seleccione el tipo de armadura"),
     prompt("seleccione el tipo de botas"),
     prompt("seleccion el tipo de arma"));

let inventarioGaret= alert("Seleccione el inventario de Garet") +
Inventarios(prompt("seleccione el casco"),
prompt("seleccione el tipo de armadura"),
prompt("seleccione el tipo de botas"),
prompt("seleccion el tipo de arma"));

let inventarioIvan = alert("Seleccione el inventario de Ivan") +
Inventarios(prompt("seleccione el casco"),
prompt("seleccione el tipo de armadura"),
prompt("seleccione el tipo de botas"),
prompt("seleccion el tipo de arma"));

let inventarioMia= alert("Seleccione el inventario de Mia") +
Inventarios(prompt("seleccione el casco"),
prompt("seleccione el tipo de armadura"),
prompt("seleccione el tipo de botas"),
prompt("seleccion el tipo de arma"));

console.log(invetarioHans);
console.log(inventarioGaret);
console.log(inventarioIvan);
console.log(inventarioMia); */

/* const numeros= [1, 2, 3, 4, 5, 6, 8, 7, 9 ,54, 15, "quiricocho"]
console.log(numeros);
console.log(numeros.length);
console.log(numeros[3]);
console.log(numeros[0] + " " + numeros[11]);
 */
/* function creaArma(tipo, agregado) {
    this.tipo=tipo
    this.agregado=agregado
}

const armas= ["espada", "hacha", "lanza", "mangual", "baculo"]
console.log(armas[2]);

armas[6]= prompt("indica tu arma de preferencia")
armas[5]= "daga"
armas.unshift("dagaEnv")
console.log(armas);

armas.push(prompt("agrega otra arma"))

console.log(armas);

console.log(armas.length);
for (let i = 0; i < armas.length; i++) {
    console.log(armas[i]);
    
}
console.log(armas.join("|"));

const bolsaObjetos=["hierba", "avellana", "menta", "manzana"]
const inverntario= armas.concat(bolsaObjetos)
console.log(inverntario);

console.log(armas.includes(prompt("indica el arma que quieres buscar")))

prompt("indica que arma quieres crear") + armas.push(new creaArma(prompt("que tipo?"), prompt("que accesorio?")))
console.log(armas);


function mostrarObjetos(arr) {
    for (let i =0; i< arr.length; i++)
console.log(arr[i]);
}

mostrarObjetos(armas)
mostrarObjetos(bolsaObjetos) */
/* function Libro(titulo, autor, precio){
    this.titulo= titulo;
    this.autor= autor;
    this.precio= precio;
}

const listaDeDeseos= [];
function pedirLibros(arr, cant) {
    do {
        let titulo= prompt("Ingresa el titulo")
        let autor= prompt("Ingresa el autor")
        let precio= prompt("Ingresa el precio")
        

    arr.push(new Libro(titulo, autor, precio))        
    } while (arr.length != cant);
    
}

pedirLibros(listaDeDeseos, 2)

console.log(listaDeDeseos); */

/* function Inventario(arma, peto, curativos, libro) {
    this.arma=arma
    this.peto=peto
    this.curativos=curativos
    this.libro=libro
   
}

const bolsaObjetos=[];

function introducirObjetos(arr, cantidad) {
    do {
        let arma= prompt("ingresa un arma")
        let peto= prompt("ingresa un peto")
        let curativos= prompt("ingresa un curativos")
        let libro= prompt("ingresa un libro")

        arr.push(new Inventario(arma, peto, curativos, libro))
    } while (arr.length != cantidad);
}

introducirObjetos(bolsaObjetos, 4)

console.log(bolsaObjetos);
console.log(bolsaObjetos[2]); */

/* let total = 0
for(let i = 0; i<= 10; i++){
    total = total + i;
}
console.log(total);
function sumarRango(inicio, fin) {
    let total2= 0
    for(let i = inicio; i<=fin; i++){
    total2 = total2 + i
    }
    return total2
}
console.log(sumarRango(1, 10));

function asignarOperacion(op) {
    switch (op) {
        case "suma":
            return (n1, n2)=> n1 + n2
        case "resta":
            return (n1, n2)=> n1 - n2
        case "multiplicacion":
            return (n1, n2) => n1 * n2
    }
}
const suma = asignarOperacion("suma")
const resta = asignarOperacion("resta")
const multiplicacion = asignarOperacion("multiplicacion")
console.log(suma);
console.log(suma(1,5));
console.log(resta(15, 9));
console.log(multiplicacion(2, 8));

const nums = [1,2,3,4,5,6,7,8,9,0]

const objs= ["hola", "soy", "un", "Cadenas"]
function porCadaUno(arr, fn) {
    for (const element of arr) {
        fn(element);
    }
}
porCadaUno(nums, console.log)
porCadaUno(objs, alert) */

const proteccion = [
    {id: 1, objeto: "traje iris", precio: 1500},
    {id: 2, objeto:"sotana magica", precio: 1800},
    {id: 3, objeto: "traje plumas", precio: 2000},
    {id: 4, objeto: "yelmo guerrero", precio: 2000},
    {id: 5, objeto: "armadura gaia", precio: 2500},
    {id: 6, objeto: "impermeable", precio: 2000},
    {id: 7, objeto: "coraza espejo", precio: 3000},
];

function buscarProteccion(arr, nombre){
    return arr.find((el)=>el.objeto.includes(nombre))
}
const agregado = (buscarProteccion(proteccion, prompt("ingrese el nombre del objeto").toUpperCase()));
console.log(agregado)

const carritoDeCompra= []
console.log(carritoDeCompra);

function almacenarObjeto(carritoDeCompra, objeto ) {
    carritoDeCompra.push(objeto)
}

almacenarObjeto(carritoDeCompra, agregado)
console.log(carritoDeCompra);

function comprarProteccion(carritoDeCompra, recargo) {
    return carritoDeCompra.reduce((acc,el)=> {
        return acc = acc + el.precio
    }, recargo)
}
const compra = comprarProteccion(carritoDeCompra, 5000)
console.log(compra); 
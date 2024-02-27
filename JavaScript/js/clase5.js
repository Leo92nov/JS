// function contacto(nombre, apellido, direccion, tel) {
// this.nombre= nombre;
// this.apellido= apellido;
// this.direccion= direccion;
// this.tel= tel;
// }
// const contacto2= new contacto(prompt("ingrese su nombre"),
//         prompt("ingrese su apellido"),
//         prompt("Ingrese su direccion"),
//         prompt("Ingrese su telefono"))
// const contacto3= new contacto(prompt("ingrese su nombre"),
//         prompt("ingrese su apellido"),
//         prompt("Ingrese su direccion"),
//         prompt("Ingrese su telefono"))
// const contacto4= new contacto(prompt("ingrese su nombre"),
//         prompt("ingrese su apellido"),
//         prompt("Ingrese su direccion"),
//         prompt("Ingrese su telefono"))
// console.log(contacto2);
// console.log(contacto3);
// console.log(contacto4);

// function libro(titulo, autor, precio, stock,){
//     this.titulo=titulo;
//     this.autor=autor;
//     this.precio=precio;
//     this.stock=stock;
//     this.vender =(cantidad)=>{
//         return{ 
//             precioTotal: this.precio * cantidad,
//             stockRestante: this.stock - cantidad
//         }
//     }
// }

// const libro1= new libro("harry potter", "JK Rowling", 5000, 20)
// console.log(libro1.vender(3));
// let a = parseInt(prompt("ingrese un valor"));
// let b = parseInt(prompt("ingrese un valor"));

// function suma(a, b){
//     return a + b
// }

// let resultado = (a + b) 
// console.log(resultado);

const numeros= [3,1,7,6,4,-98,4,2,7,-10]
// console.log(numeros);
// console.log(numeros.length);
// console.log(numeros[2]);
// console.log(numeros[0] + numeros[5]);

const cajonCubiertos=["tenedores", "cuchillos", "cucharas", "cuchilla" ]
console.log(cajonCubiertos[2]);
cajonCubiertos[4]= "cucharitas";
cajonCubiertos[5]= "bombillas";
console.log(cajonCubiertos);


numeros.push(22, 43, 56, 78);
console.log(numeros);

//metodo quitra elementos del final

numeros.pop()
numeros.unshift(-100)
numeros.shift()
// console.log(numeros.join("|"));

numeros.splice(2, 4)
// for (let i=0; i<numeros.length; i++){
//     console.log(numeros[i]);
// }
let harina= "aquei va la harina"
const alacena=["fiedos", "azucar", "yerba", harina]
console.log(alacena);
console.log(cajonCubiertos);

const granAlacena = alacena.concat(cajonCubiertos)
//indexOf
console.log(granAlacena.indexOf("tenedores"));
console.log(granAlacena.indexOf("fiedos"));
console.log(granAlacena.indexOf("poroto"));

//includes

console.log(granAlacena.includes("poroto"));
console.log(granAlacena.includes("tenedores"));

function Producto(nombre, precio, stock) {
    this.nombre=nombre;
    this.precio=parseFloat(precio);
    this.stock=parseInt(stock);
    this.mostrarInformacion = function () {
        return `Nombre: ${this.nombre}, Precio $${this.precio}, Stock: ${this.stock}`
    }
    this.mostrarStock= () => { 
        return this.stock;
    }
    
}




const listaLibros=[{titulo:"Los tres mosqueteros", 
autor:"alejandro dumas"}]
console.log(listaLibros);

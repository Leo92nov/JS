function Libro(nombre, autor, precio) {
    this.nombre = nombre;
    this.autor = autor;
    this.precio = precio;
}
const listaDeDeseos = []

function pedirLibros(arr, cant) {
    do{
        let titulo = prompt("Ingresa el titul,o del libro")
        let autor = prompt("Ingresa el autor del libro")
        let precio = prompt("Ingresa el precio del libro")

        arr.push(new Libro(titulo, autor, precio))
    }while(arr.length != cant)
}

pedirLibros(listaDeDeseos, 2)
console.log(listaDeDeseos);

function AlmacenarPlayer(nombre) {
    console.log("el nombre elñegido es" + nombre);
} 

AlmacenarPlayer()
document.getElementById("name").value
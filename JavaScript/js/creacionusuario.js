let usuarios = JSON.parse(localStorage.getItem("suarios"));
console.log(usuarios);


const NOMBRE = document.getElementById("nombreUsuarioN")
const MAIL = document.getElementById("mailUsuarioN");
const USER = document.getElementById("userN");
const PASS = document.getElementById("passwordUsuarioN");
const BTNUSUARION = document.getElementById("btnCrear");
const BTNVOLVER = document.getElementById("btnVolver")


class crearUser{
    constructor(mail, user, pass) {
        this.mail = mail;
        this.user = user;
        this.pass = pass;
    }
}

BTNUSUARION.addEventListener("click", function() {
   
    const mailValue = MAIL.value;
    const userValue = USER.value;
    const passValue = PASS.value;
    const nuevoUsuario = new crearUser(mailValue, userValue, passValue);

 console.log(nuevoUsuario);
 usuarios.push(nuevoUsuario)
 console.log(usuarios);


let usuariosj = JSON.stringify(usuarios);
    localStorage.setItem("suarios", usuariosj) 
    alert("Usuario creado exitosamente")

});

BTNVOLVER.addEventListener("click", function(){
        location.href = "../index.html";
});



let usuarioJ = JSON.parse(localStorage.getItem("usuarios"));

const NOMBRE = document.getElementById("nombreUsuarioN")
const MAIL = document.getElementById("mailUsuarioN");
const USER = document.getElementById("userN");
const PASS = document.getElementById("passwordUsuarioN");
const BTNUSUARION = document.getElementById("btnCrear");

function crearUser(mail, user, pass) {
    this.mail = mail;
    this.user = user;
    this.pass = pass;
}

BTNUSUARION.addEventListener("click", function() {
   
    const mailValue = MAIL.value;
    const userValue = USER.value;
    const passValue = PASS.value;

    const nuevoUsuario = new crearUser(mailValue, userValue, passValue);
 console.log(nuevoUsuario);
    localStorage.setItem("singUp", JSON.stringify(nuevoUsuario));
    location.href = "../index.html"
 console.log(usuarioJ);
});
let usuarioJ = JSON.parse(localStorage.getItem("usuarios"));


const MAIL = document.getElementById("mailUsuarioN");
const USER = document.getElementById("nameUsuarioN");
const PASS = document.getElementById("passwordUsuarioN");
const BTNUSUARION = document.getElementById("btnCrear");
const USUARIONUEVO = [];

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

    console.log(USUARIONUEVO);
    localStorage.setItem("singUp", JSON.stringify(USUARIONUEVO));
    usuarioJ.push(nuevoUsuario)
 console.log(usuarioJ);
});
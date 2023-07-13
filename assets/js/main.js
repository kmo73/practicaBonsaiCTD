/* Desplegables */


/* Form */

/* usuariosArray = [
  {
    usuario: "admin@admin.com",
    password: "admin",
  },
  {
    usuario: "soli@gmail.com",
    password: "soli",
  },
];

window.onload = function () {
  // Login
  document.getElementById("login").addEventListener("click", function () {
    let usuarioIngresado = prompt("Ingrese su usuario");

    for (let index = 0; index < usuariosArray.length; index++) {
      if (usuariosArray[index].usuario === usuarioIngresado) {
        let passwordIngresado = prompt("Ingrese su contraseña");
        if (usuariosArray[index].password === passwordIngresado) {
          alert("Bienvenido " + usuarioIngresado);
          return;
        } else {
          alert("Contraseña incorrecta");
          return;
        }
      }
    }
  }); 
};
*/

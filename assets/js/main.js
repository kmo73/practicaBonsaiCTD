var loginBtn = document.querySelector(".btn.login");
var popup = document.getElementById("popup");

// Función para mostrar el popup
function mostrarPopup() {
  popup.style.display = "block";
}

// Función para ocultar el popup
function ocultarPopup() {
  popup.style.display = "none";
}

// Asigna el evento de clic al botón de login
loginBtn.addEventListener("click", mostrarPopup);

// Asigna el evento de clic al fondo del popup para ocultarlo
popup.addEventListener("click", function (event) {
  // Detiene la propagación del evento si se hace clic en el contenido del popup
  if (event.target !== this) {
    event.stopPropagation();
  } else {
    ocultarPopup();
  }
});

let registrationForm = document.getElementById("popup");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que se envíe el formulario
  let nombre = document.getElementById("nombre").value;
  loginBtn.textContent = "Hola " + nombre; // Actualiza el texto del botón de login
  ocultarPopup(); // Oculta el popup
});

// Funcion desplegable de menu
let estadoVisible = false;

function toggleTexto(id) {
  let subMenu = document.getElementById(id);

  if (estadoVisible) {
    subMenu.style.display = "none";
    estadoVisible = false;
  } else {
    subMenu.style.display = "block";
    estadoVisible = true;
  }
}

// Funcion para ocultar el submenu al hacer clic fuera de el
//Declaracion de funcion
function ocultarSubMenu(event, subMenuId, menuId) {
  let targetElement = event.target; // Elemento clickeado
  let subMenu = document.getElementById(subMenuId); // Elemento a desplegar
  let menu = document.getElementById(menuId); // Elemento que contiene el submenu

  if (targetElement !== subMenu && !menu.contains(targetElement)) {
    // Si se hace clic fuera del submenu
    subMenu.style.display = "none"; // Oculta el submenu
    estadoVisible = false; // Actualiza el estado
  }
}

//Llama a la funcion
document.addEventListener("click", function (event) {
  ocultarSubMenu(event, "products-sub-menu", "products");
});

//Llama a la funcion
document.addEventListener("click", function (event) {
  ocultarSubMenu(event, "templates-sub-menu", "templates");
});

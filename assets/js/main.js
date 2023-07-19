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

var registrationForm = document.getElementById("popup");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que se envíe el formulario
  var nombre = document.getElementById("nombre").value;
  loginBtn.textContent = "Hola " + nombre; // Actualiza el texto del botón de login
  ocultarPopup(); // Oculta el popup
});

// Funcion desplegable de menu
var estadoVisible = false;

function toggleTexto(id) {
  var subMenu = document.getElementById(id);

  if (estadoVisible) {
    subMenu.style.display = "none";
    estadoVisible = false;
  } else {
    subMenu.style.display = "block";
    estadoVisible = true;
  }
}

// Funcion para ocultar el submenu al hacer clic fuera de el
document.addEventListener("click", function (event) {
  var targetElement = event.target; // Clicked element
  var subMenu = document.getElementById("products-sub-menu"); // Elemento a desplegar
  var menu = document.getElementById("products"); // Elemento que contiene el submenu

  if (targetElement !== subMenu && !menu.contains(targetElement)) {
    // Si se hace clic fuera del submenu
    subMenu.style.display = "none"; // Oculta el submenu
    estadoVisible = false; // Actualiza el estado
  }
});

document.addEventListener("click", function (event) {
  var targetElement1 = event.target; // Clicked element
  var subMenu1 = document.getElementById("templates-sub-menu"); // Elemento a desplegar
  var menu1 = document.getElementById("templates"); // Elemento que contiene el submenu

  if (targetElement1 !== subMenu1 && !menu1.contains(targetElement1)) {
    // Si se hace clic fuera del submenu
    subMenu1.style.display = "none"; // Oculta el submenu
    estadoVisible = false; // Actualiza el estado
  }
});

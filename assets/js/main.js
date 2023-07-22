let loginBtn = document.querySelector(".btn.login");
let popup = document.getElementById("popup");
let subscribeBtn = document.getElementById("subscribe");
let popupSubscribe = document.getElementById("popupSubscribe");
let buyNowBtn = document.getElementById("btnBuyNow");
let buyNowBtn2 = document.getElementById("btnBuyNow2");
let popupBuyNow = document.getElementById("popupBuyNow");

// Función para mostrar el popup
function mostrarPopup() {
  popup.style.display = "block";
}
function mostrarPopupSubscribe() {
  popupSubscribe.style.display = "block";
}
function mostrarPopupBuyNow() {
  popupBuyNow.style.display = "block";
}

// Función para ocultar el popup
function ocultarPopup() {
  popup.style.display = "none";
}
function ocultarPopupSubscribe() {
  popupSubscribe.style.display = "none";
}
function ocultarPopupBuyNow() {
  popupBuyNow.style.display = "none";
}

// Asigna el evento de clic al botón de login - subscribe - buy now
loginBtn.addEventListener("click", mostrarPopup);
subscribeBtn.addEventListener("click", mostrarPopupSubscribe);
buyNowBtn.addEventListener("click", mostrarPopupBuyNow);
buyNowBtn2.addEventListener("click", mostrarPopupBuyNow);

// Asigna el evento de clic al fondo del popup para ocultarlo
popup.addEventListener("click", function (event) {
  // Detiene la propagación del evento si se hace clic en el contenido del popup
  if (event.target !== this) {
    event.stopPropagation();
  } else {
    ocultarPopup();
  }
});

popupSubscribe.addEventListener("click", function (event) {
  // Detiene la propagación del evento si se hace clic en el contenido del popup
  if (event.target !== this) {
    event.stopPropagation();
  } else {
    ocultarPopupSubscribe();
  }
});

popupBuyNow.addEventListener("click", function (event) {
  // Detiene la propagación del evento si se hace clic en el contenido del popup
  if (event.target !== this) {
    event.stopPropagation();
  } else {
    ocultarPopupBuyNow();
  }
});

let registrationForm = document.getElementById("popup");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que se envíe el formulario
  let nombre = document.getElementById("nombre").value;
  loginBtn.textContent = "Hola " + nombre; // Actualiza el texto del botón de login
  subscribeBtn.style.display = "none"; // Ocultar el subscribe
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

function aceptarMedioPago() {
  var mediosPago = document.getElementsByName("metodo_pago");
  var medioPagoSeleccionado = "";

  // Obtener el medio de pago seleccionado
  for (var i = 0; i < mediosPago.length; i++) {
    if (mediosPago[i].checked) {
      medioPagoSeleccionado = mediosPago[i].value;
      break;
    }
  }

  if (medioPagoSeleccionado !== "") {
    // Ocultar el popup de medios de pago
    popupBuyNow.style.display = "none";

    // Mostrar mensaje de subscripción exitosa
    alert("¡Subscripción realizada con éxito! Medio de pago seleccionado: " + medioPagoSeleccionado);
  } else {
    alert("Por favor, selecciona un medio de pago.");
  }
}

var loginBtn = document.querySelector('.btn.login');
var popup = document.getElementById('popup');

// Función para mostrar el popup
function mostrarPopup() {
  popup.style.display = 'block';
}

// Función para ocultar el popup
function ocultarPopup() {
  popup.style.display = 'none';
}

// Asigna el evento de clic al botón de login
loginBtn.addEventListener('click', mostrarPopup);

// Asigna el evento de clic al fondo del popup para ocultarlo
popup.addEventListener('click', function(event) {
  // Detiene la propagación del evento si se hace clic en el contenido del popup
  if (event.target !== this) {
    event.stopPropagation();
  } else {
    ocultarPopup();
  }
});

var registrationForm = document.getElementById('popup');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario
  var nombre = document.getElementById('nombre').value;
  loginBtn.textContent = "Hola " + nombre; // Actualiza el texto del botón de login
  ocultarPopup(); // Oculta el popup
});

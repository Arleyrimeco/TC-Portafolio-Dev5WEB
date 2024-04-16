/* ********** Menu ********** */
((d) => {
  // Selecciona el botón del menú y el menú en el DOM
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    // Agrega un evento de clic al botón del menú
  $btnMenu.addEventListener("click", (e) => {
    // Alterna la visibilidad de los íconos del menú
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    // Alterna la clase "is-active" en el menú para mostrarlo o esconderlo
    $menu.classList.toggle("is-active");
  });

    // Agrega un evento de clic al documento para cerrar el menú cuando se hace clic en un enlace
  d.addEventListener("click", (e) => {
     // Verifica si el elemento clickeado es un enlace dentro del menú
    if (!e.target.matches(".menu a")) return false;
     // Restaura la visibilidad de los íconos del menú
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    // Remueve la clase "is-active" del menú para esconderlo
    $menu.classList.remove("is-active");
  });
})(document);


/* ************ ContactForm ************ */
/* ********** Formulario de contacto ********** */
((d) => {
  // Selecciona los elementos del formulario, el cargador y la respuesta del formulario en el DOM
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  // Agrega un evento de envío al formulario
  $form.addEventListener("submit", (e) => {
    // Evita el comportamiento predeterminado de envío del formulario
    e.preventDefault();
    // Muestra el cargador mientras se envía el formulario
    $loader.classList.remove("none");
    // Realiza una solicitud fetch para enviar los datos del formulario a un servicio externo
    fetch("https://formsubmit.co/ajax/your@email.com", {
      method: "POST", // Método de envío POST
      body: new FormData(e.target), // Datos del formulario
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))  // Verifica si la solicitud fue exitosa
      .then((json) => {
        // Maneja la respuesta exitosa del servicio
        console.log(json); // Registra la respuesta en la consola
        location.hash = "#gracias"; // Redirige a una sección de "gracias" en la página
        $form.reset(); // Limpia el formulario después del envío exitoso
      })
      .catch((err) => {
        // Maneja errores en la solicitud
        console.log(err); // Registra el error en la consola
        
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
       // Muestra el mensaje de error en la respuesta del formulario
          $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        // Ejecuta acciones después de completar la solicitud, independientemente de si fue exitosa o no
        $loader.classList.add("none"); // Oculta el cargador
        setTimeout(() => {
          location.hash = "#close"; // Cierra la sección de "gracias" después de 3 segundos
        }, 3000);
      });
  });
})(document);

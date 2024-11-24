(function ($) {
    "use strict"; // Activa el modo estricto para evitar errores comunes en JavaScript.
    
    // Botón "Volver Arriba"
    $(window).scroll(function () { // Se ejecuta cada vez que se desplaza la ventana.
        if ($(this).scrollTop() > 200) { // Comprueba si el desplazamiento vertical es mayor a 200 píxeles.
            $('.back-to-top').fadeIn('slow'); // Si es así, muestra el botón "volver arriba" lentamente.
        } else {
            $('.back-to-top').fadeOut('slow'); // Si no, oculta el botón "volver arriba" lentamente.
        }
    });
    
    // Acción al hacer clic en el botón "volver arriba"
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo'); // Desplaza suavemente la ventana hacia arriba en 1500 milisegundos.
        return false; // Previene el comportamiento por defecto del enlace.
    });
    
    
    // Barra de Navegación Fija
    $(window).scroll(function () { // Se ejecuta cada vez que se desplaza la ventana.
        if ($(this).scrollTop() > 90) { // Comprueba si el desplazamiento vertical es mayor a 90 píxeles.
            $('.nav-bar').addClass('nav-sticky'); // Si es así, añade la clase "nav-sticky" a la barra de navegación.
            $('.carousel, .page-header').css("margin-top", "73px"); // Ajusta el margen superior del carrusel y la cabecera de la página.
        } else {
            $('.nav-bar').removeClass('nav-sticky'); // Si no, quita la clase "nav-sticky".
            $('.carousel, .page-header').css("margin-top", "0"); // Restablece el margen superior a 0.
        }
    });
    
    
    // Menú desplegable al pasar el ratón
    $(document).ready(function () { // Se ejecuta cuando el documento está completamente cargado.
        function toggleNavbarMethod() { // Función para manejar el comportamiento del menú desplegable.
            if ($(window).width() > 992) { // Comprueba si el ancho de la ventana es mayor a 992 píxeles (pantallas grandes).
                $('.navbar .dropdown').on('mouseover', function () { // Al pasar el ratón sobre el elemento dropdown.
                    $('.dropdown-toggle', this).trigger('click'); // Simula un clic en el botón del dropdown para mostrarlo.
                }).on('mouseout', function () { // Al sacar el ratón del elemento dropdown.
                    $('.dropdown-toggle', this).trigger('click').blur(); // Simula un clic para ocultar el dropdown y quita el enfoque.
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout'); // Si es menor a 992 píxeles, quita los eventos de mouseover y mouseout.
            }
        }
        toggleNavbarMethod(); // Llama a la función para establecer el comportamiento inicial.
        $(window).resize(toggleNavbarMethod); // Vuelve a llamar a la función cuando se redimensiona la ventana.
    });


    // Carrusel de Testimonios
    $(".testimonials-carousel").owlCarousel({ // Inicializa el carrusel de testimonios.
        autoplay: true, // Activa la reproducción automática.
        dots: true, // Muestra los puntos de navegación.
        loop: true, // Permite que el carrusel vuelva al inicio al llegar al final.
        responsive: { // Configuración de la cantidad de elementos visibles según el tamaño de la pantalla.
            0: {
                items: 1 // En pantallas pequeñas, muestra 1 elemento.
            },
            576: {
                items: 1 // En pantallas medianas, muestra 1 elemento.
            },
            768: {
                items: 2 // En pantallas grandes, muestra 2 elementos.
            },
            992: {
                items: 3 // En pantallas muy grandes, muestra 3 elementos.
            }
        }
    });
    
    
    // Carrusel de Blogs
    $(".blog-carousel").owlCarousel({ // Inicializa el carrusel de blogs.
        autoplay: true, // Activa la reproducción automática.
        dots: true, // Muestra los puntos de navegación.
        loop: true, // Permite que el carrusel vuelva al inicio al llegar al final.
        responsive: { // Configuración de la cantidad de elementos visibles según el tamaño de la pantalla.
            0: {
                items: 1 // En pantallas pequeñas, muestra 1 elemento.
            },
            576: {
                items: 1 // En pantallas medianas, muestra 1 elemento.
            },
            768: {
                items: 2 // En pantallas grandes, muestra 2 elementos.
            },
            992: {
                items: 3 // En pantallas muy grandes, muestra 3 elementos.
            }
        }
    });
    
    
    // Isotopo y Filtro de Portafolio
    var portfolioIsotope = $('.portfolio-container').isotope({ // Inicializa el isotopo del portafolio.
        itemSelector: '.portfolio-item', // Selecciona los elementos del portafolio.
        layoutMode: 'fitRows' // Establece el modo de diseño en filas.
    });

    $('#portfolio-flters li').on('click', function () { // Al hacer clic en un elemento del filtro.
        $("#portfolio-flters li").removeClass('filter-active'); // Quita la clase "filter-active" de todos los elementos del filtro.
        $(this).addClass('filter-active'); // Agrega la clase "filter-active" al elemento seleccionado.

        portfolioIsotope.isotope({filter: $(this).data('filter')}); // Filtra el portafolio según el valor del atributo "data-filter" del elemento seleccionado.
    });
    
})(jQuery);


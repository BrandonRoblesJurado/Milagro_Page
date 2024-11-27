// Función para abrir el widget
function openWidget() {
    const widget = document.getElementById('popup-widget');
    const openBtn = document.querySelector('.open-btn');
    
    // Mostrar el widget y ocultar el botón
    widget.classList.add('active');
    openBtn.style.display = 'none'; // Oculta el botón después de hacer clic
  }
  
  // Función para cerrar el widget
  function closeWidget() {
    const widget = document.getElementById('popup-widget');
    const openBtn = document.querySelector('.open-btn');
    
    // Mostrar el botón nuevamente cuando se cierra el widget
    widget.classList.remove('active');
    openBtn.style.display = 'block'; // Muestra el botón cuando el widget está cerrado
  }
  
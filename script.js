// Esperamos a que cargue todo el contenido de la página
document.addEventListener('DOMContentLoaded', function() {

    // --------------------------
    // 1. MENÚ MÓVIL
    // --------------------------
    const botonMenu = document.getElementById('botonMenu');
    const menuMovil = document.getElementById('menuMovil');

    // Mostrar / Ocultar menú al presionar el botón
    botonMenu.addEventListener('click', function() {
        menuMovil.classList.toggle('activo');
        // Cambiar el ícono de menú a X y viceversa
        const icono = botonMenu.querySelector('i');
        icono.classList.toggle('fa-bars');
        icono.classList.toggle('fa-times');
    });

    // Cerrar menú al hacer clic en un enlace
    const enlacesMenu = menuMovil.querySelectorAll('a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function() {
            menuMovil.classList.remove('activo');
            const icono = botonMenu.querySelector('i');
            icono.classList.remove('fa-times');
            icono.classList.add('fa-bars');
        });
    });

    // --------------------------
    // 2. EFECTO EN LA CABECERA AL HACER SCROLL
    // --------------------------
    const cabecera = document.getElementById('cabecera');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            cabecera.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            cabecera.style.padding = '8px 0';
        } else {
            cabecera.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            cabecera.style.padding = '12px 0';
        }
    });

    // --------------------------
    // 3. FUNCIONALIDAD DEL BUSCADOR
    // --------------------------
    const buscadores = document.querySelectorAll('.buscador input, .buscador-movil input');
    buscadores.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const termino = this.value.trim().toLowerCase();
                if (termino !== '') {
                    alert(`🔍 Buscando: "${termino}"\nEn una versión completa aquí se mostrarían los resultados.`);
                    this.value = '';
                }
            }
        });
    });

    // --------------------------
    // 4. VALIDACIÓN DEL FORMULARIO DE RESERVA
    // --------------------------
    const formularioReserva = document.querySelector('.formulario');
    formularioReserva.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que se recargue la página

        // Obtenemos los valores ingresados
        const nombre = this.querySelector('input[type="text"]').value.trim();
        const telefono = this.querySelector('input[type="tel"]').value.trim();
        const fecha = this.querySelector('input[type="date"]').value;
        const hora = this.querySelector('input[type="time"]').value;
        const personas = this.querySelector('input[type="number"]').value;

        // Verificamos que todos los campos obligatorios estén completos
        if (nombre && telefono && fecha && hora && personas) {
            alert(`¡Reserva enviada con éxito!\n\nGracias ${nombre}, te esperamos el día ${fecha} a las ${hora} hs.\nConfirmaremos a tu teléfono: ${telefono}`);
            this.reset(); // Limpiamos el formulario
        } else {
            alert('Por favor completa todos los campos obligatorios.');
        }
    });

    // --------------------------
    // 5. ANIMACIÓN DE APARICIÓN AL HACER SCROLL
    // --------------------------
    const elementosAnimados = document.querySelectorAll('.tarjeta-plato, .tarjeta-evento');

    const animarAlScroll = function() {
        elementosAnimados.forEach(elemento => {
            const posicion = elemento.getBoundingClientRect().top;
            const alturaPantalla = window.innerHeight / 1.3;

            if (posicion < alturaPantalla) {
                elemento.style.opacity = '1';
                elemento.style.transform = 'translateY(0)';
            }
        });
    };

    // Inicializamos los elementos con opacidad 0
    elementosAnimados.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(30px)';
        elemento.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animarAlScroll);
    animarAlScroll(); // Ejecutamos al cargar la página
});
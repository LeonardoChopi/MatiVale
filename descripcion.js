/* ========================================
   CARGAR PRODUCTO EN PÁGINA DE DESCRIPCIÓN
   ======================================== */

// Obtener el código del producto de la URL
const params = new URLSearchParams(window.location.search);
const codigoProducto = params.get('codigo');

// Si no hay código, redirigir a index
if (!codigoProducto) {
    window.location.href = 'Index.html';
}

// Buscar el producto en el array
const producto = productos.find(p => p.codigo === codigoProducto);

// Si no se encuentra, redirigir a index
if (!producto) {
    window.location.href = 'Index.html';
}

/* ========================================
   RENDERIZAR DATOS DEL PRODUCTO
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

    const imagenPorDefecto = "https://png.pngtree.com/png-clipart/20230703/original/pngtree-cardboard-boxes-png-image_9248461.png";
    
    const imgContainer = document.querySelector('.img-container');
    const contenido = document.querySelector('.contenido');

    imgContainer.innerHTML = "";

    /* ========================================
       CARRUSEL SI HAY VARIAS IMÁGENES
       ======================================== */
    if (producto.imagenes && producto.imagenes.length > 0) {

        imgContainer.innerHTML = `
            <div class="carousel-descripcion">
                ${producto.imagenes.map((img, i) => `
                    <img src="${img}" 
                         class="carousel-img ${i === 0 ? 'active' : ''}" 
                         alt="${producto.nombre}">
                `).join("")}
                <button class="prev">‹</button>
                <button class="next">›</button>
            </div>
        `;

        const imgs = imgContainer.querySelectorAll(".carousel-img");
        let index = 0;
        let autoPlayInterval;

        const cambiarImagen = (direccion) => {
            imgs[index].classList.remove("active");

            if (direccion === "next") {
                index = (index + 1) % imgs.length;
            } else {
                index = (index - 1 + imgs.length) % imgs.length;
            }

            imgs[index].classList.add("active");
        };

        const iniciarAutoplay = () => {
            autoPlayInterval = setInterval(() => {
                cambiarImagen("next");
            }, 3000); // cada 3 segundos
        };

        const detenerAutoplay = () => {
            clearInterval(autoPlayInterval);
        };

        // Botón siguiente
        imgContainer.querySelector(".next").addEventListener("click", (e) => {
            e.stopPropagation();
            detenerAutoplay();
            cambiarImagen("next");
            iniciarAutoplay();
        });

        // Botón anterior
        imgContainer.querySelector(".prev").addEventListener("click", (e) => {
            e.stopPropagation();
            detenerAutoplay();
            cambiarImagen("prev");
            iniciarAutoplay();
        });

        // Pausar si el mouse está encima
        imgContainer.addEventListener("mouseenter", detenerAutoplay);
        imgContainer.addEventListener("mouseleave", iniciarAutoplay);

        // Iniciar autoplay
        iniciarAutoplay();
    }

    /* ========================================
       SI SOLO TIENE UNA IMAGEN
       ======================================== */
    else {

        const imagen = producto.imagen || imagenPorDefecto;

        imgContainer.innerHTML = `
            <img src="${imagen}" alt="${producto.nombre}">
        `;
    }

    /* ========================================
       RENDERIZAR CONTENIDO
       ======================================== */

    contenido.innerHTML = `
        <h1>${producto.nombre}</h1>
        <p class="categoria"><strong>Categoría:</strong> ${producto.categoria}</p>
        <p class="codigo"><strong>Código:</strong> ${producto.codigo}</p>
        <p class="descripcion">${producto.descripcion || 'Sin descripción disponible'}</p>

        <div class="precio-container">
            <span class="precio">$${producto.precio}</span>
        </div>

        <div class="botones-accion">
            <button class="btn-agregar-carrito">Añadir al Carrito</button>
            <a href="https://wa.me/+59892882637" target="_blank" class="btn-contacto">
                Consultar por WhatsApp
            </a>
            <a href="https://m.me/mirtha.pacilio" target="_blank" class="btn-contacto-facebook">
                Consultar por Facebook
            </a>
        </div>

        <a href="Index.html" class="btn-volver">← Volver a productos</a>
    `;

    /* ========================================
       EVENTO AGREGAR AL CARRITO
       ======================================== */

    const btnAgregar = contenido.querySelector('.btn-agregar-carrito');
    if (btnAgregar) {
        btnAgregar.addEventListener('click', function() {
            agregarAlCarrito(producto);
        });
    }

});


/* ========================================
   INICIALIZAR BOTONES DE CONTACTO
   ======================================== */

if (typeof inicializarBotonesContacto === 'function') {
    inicializarBotonesContacto();
}

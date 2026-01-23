/* ========================================
   CONFIGURACIÓN INICIAL
   ======================================== */
   
const inputBuscador = document.getElementById("inputBuscador");
const imagenPorDefecto = "https://png.pngtree.com/png-clipart/20230703/original/pngtree-cardboard-boxes-png-image_9248461.png";

// Los productos se importan desde productos.js

const contenedor = document.getElementById("productos");

/* ========================================
   GENERACIÓN DE TARJETAS DE PRODUCTOS
   ======================================== */

productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Asignar imagen por defecto si no hay imagen
    if (!prod.imagen || prod.imagen === "") {
        prod.imagen = imagenPorDefecto;
    }

    /* --- Tarjetas con Carrusel de Imágenes --- */
    if (prod.imagenes) {
        // Card con carrusel
        card.innerHTML = `
            <div class="carousel">
                ${prod.imagenes.map((img, i) => `
                    <img src="${img}" class="carousel-img ${i === 0 ? 'active' : ''}">
                `).join("")}
                <button class="prev">‹</button>
                <button class="next">›</button>
            </div>
            <div class="card-content">
                <h3>${prod.nombre}</h3>
                <span class="precio">$${prod.precio}</span> 
                <br>
                <a href="descripcion.html?codigo=${prod.codigo}" class="btn-mas-info">Mas Informacion</a>
                <button class="btn-agregar-carrito">Añadir al Carrito</button>
                <a href="#" class="btn-contacto">Consultar por WhatsApp</a>
            </div>
        `;

        // Lógica del carrusel - Navegación entre imágenes
        const imgs = card.querySelectorAll(".carousel-img");
        let index = 0;
        let autoPlayInterval;

        // Función para cambiar imagen
        const cambiarImagen = (direccion) => {
            const imagenActual = imgs[index];
            
            if (direccion === "next") {
                imagenActual.classList.add("slide-next");
                imagenActual.classList.remove("active");
                index = (index + 1) % imgs.length;
            } else {
                imagenActual.classList.add("slide-prev");
                imagenActual.classList.remove("active");
                index = (index - 1 + imgs.length) % imgs.length;
            }
            
            setTimeout(() => {
                imagenActual.classList.remove("slide-next", "slide-prev");
                imgs[index].classList.add("active");
            }, 10);
        };

        // Función para iniciar autoplay
        const iniciarAutoplay = () => {
            autoPlayInterval = setInterval(() => {
                cambiarImagen("next");
            }, 3000);
        };

        // Botón siguiente
        card.querySelector(".next").addEventListener("click", () => {
            clearInterval(autoPlayInterval);
            cambiarImagen("next");
            iniciarAutoplay();
        });

        // Botón anterior
        card.querySelector(".prev").addEventListener("click", () => {
            clearInterval(autoPlayInterval);
            cambiarImagen("prev");
            iniciarAutoplay();
        });

        // Iniciar autoplay al cargar
        iniciarAutoplay();
    } 
    /* --- Tarjetas Normales (una sola imagen) --- */
    else {
        // Card normal
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <div class="card-content">
                <h3>${prod.nombre}</h3>
                <span class="precio">$${prod.precio}</span>
                <br>
                <a href="descripcion.html?codigo=${prod.codigo}" class="btn-mas-info">Mas Informacion</a>
                <button class="btn-agregar-carrito">Añadir al Carrito</button>
                <a href="#" class="btn-contacto">Consultar por WhatsApp</a>
            </div>
        `;
    }

    /* ========================================
       EVENTOS DE BOTONES EN LA TARJETA
       ======================================== */
    
    // Botón Añadir al Carrito - Agrega el producto al carrito
    const btnAgregar = card.querySelector(".btn-agregar-carrito");
    if (btnAgregar) {
        btnAgregar.addEventListener("click", function(e) {
            e.preventDefault();
            agregarAlCarrito(prod);
        });
    }

    // Insertar tarjeta en el contenedor
    contenedor.appendChild(card);
});

/* ========================================
   FILTRADO DE PRODUCTOS
   ======================================== */

// Busca productos por código o nombre mientras escribes
if (inputBuscador) {
    inputBuscador.addEventListener("input", function(e) {
        const busqueda = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll(".card");
        
        cards.forEach((card, index) => {
            const codigoProducto = productos[index].codigo.toLowerCase();
            const nombreProducto = productos[index].nombre.toLowerCase();
            
            if (busqueda === "") {
                // Si está vacío, mostrar todos
                card.style.display = "";
            } else if (codigoProducto.includes(busqueda) || nombreProducto.includes(busqueda)) {
                // Si coincide el código O el nombre, mostrar
                card.style.display = "";
            } else {
                // Si no coincide, ocultar
                card.style.display = "none";
            }
        });
    });
}

/* ========================================
   INICIALIZAR EVENTOS DE CONTACTO
   ======================================== */

inicializarBotonesContacto();

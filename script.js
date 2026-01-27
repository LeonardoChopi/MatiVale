/* ========================================
   CONFIGURACIÓN INICIAL
   ======================================== */

const inputBuscador = document.getElementById("inputBuscador");
const imagenPorDefecto = "https://static.vecteezy.com/system/resources/thumbnails/013/834/820/small/cartoon-cardbox-open-png.png";

const contenedor = document.getElementById("productos");


/* ========================================
   GENERACIÓN DE TARJETAS DE PRODUCTOS
   ======================================== */

productos.forEach(prod => {

    const card = document.createElement("div");
    card.classList.add("card");

    // Normalizar imágenes
    if (prod.imagenes && prod.imagenes.length > 0) {
        // Si tiene array de imágenes, ok
    } else if (prod.imagen && prod.imagen !== "") {
        // Si tiene una sola imagen, convertirla en array
        prod.imagenes = [prod.imagen];
    } else {
        // Si no tiene nada, usar imagen por defecto
        prod.imagenes = [imagenPorDefecto];
    }

    /* ========================================
       TARJETAS CON CARRUSEL
       ======================================== */

    if (prod.imagenes.length > 1) {

        card.innerHTML = `
            <div class="carousel">
                <a href="descripcion.html?codigo=${prod.codigo}">
                    ${prod.imagenes.map((img, i) => `
                        <img src="${img}" class="card-image carousel-img ${i === 0 ? 'active' : ''}">
                    `).join("")}
                </a>
                <button class="prev">‹</button>
                <button class="next">›</button>
            </div>
            <div class="card-content">
                <h3>${prod.nombre}</h3>
                <span class="precio">$${prod.precio}</span>
                <br>
                <a href="descripcion.html?codigo=${prod.codigo}" class="btn-mas-info">Mas Informacion</a>
                <button class="btn-agregar-carrito">Añadir al Carrito</button>
            </div>
        `;

        const imgs = card.querySelectorAll(".carousel-img");
        let index = 0;
        let autoPlayInterval;

        const cambiarImagen = (direccion) => {

            if (imgs.length <= 1) return;

            const imagenActual = imgs[index];
            imagenActual.classList.remove("active");

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
            }, 3000);
        };

        const btnNext = card.querySelector(".next");
        const btnPrev = card.querySelector(".prev");

        btnNext.addEventListener("click", () => {
            clearInterval(autoPlayInterval);
            cambiarImagen("next");
            iniciarAutoplay();
        });

        btnPrev.addEventListener("click", () => {
            clearInterval(autoPlayInterval);
            cambiarImagen("prev");
            iniciarAutoplay();
        });

        iniciarAutoplay();

    } else {

        /* ========================================
           TARJETA NORMAL (UNA SOLA IMAGEN)
           ======================================== */

        card.innerHTML = `
            <a href="descripcion.html?codigo=${prod.codigo}">
                <img src="${prod.imagenes[0]}" alt="${prod.nombre}" class="card-image">
            </a>
            <div class="card-content">
                <h3>${prod.nombre}</h3>
                <span class="precio">$${prod.precio}</span>
                <br>
                <a href="descripcion.html?codigo=${prod.codigo}" class="btn-mas-info">Mas Informacion</a>
                <button class="btn-agregar-carrito">Añadir al Carrito</button>
            </div>
        `;
    }

    /* ========================================
       EVENTOS DE BOTONES
       ======================================== */

    const btnAgregar = card.querySelector(".btn-agregar-carrito");

    if (btnAgregar) {
        btnAgregar.addEventListener("click", function(e) {
            e.preventDefault();
            agregarAlCarrito(prod);
        });
    }

    contenedor.appendChild(card);
});


/* ========================================
   FILTRADO DE PRODUCTOS
   ======================================== */

if (inputBuscador) {
    inputBuscador.addEventListener("input", function(e) {

        const busqueda = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll(".card");

        cards.forEach((card, index) => {

            const codigoProducto = productos[index].codigo.toLowerCase();
            const nombreProducto = productos[index].nombre.toLowerCase();

            if (
                busqueda === "" ||
                codigoProducto.includes(busqueda) ||
                nombreProducto.includes(busqueda)
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}


/* ========================================
   INICIALIZAR CONTACTO
   ======================================== */

if (typeof inicializarBotonesContacto === "function") {
    inicializarBotonesContacto();
}

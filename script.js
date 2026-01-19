const numero = "+59892882637";
const inputBuscador = document.getElementById("inputBuscador");

// Los productos se importan desde productos.js

const contenedor = document.getElementById("productos");

productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("card");

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
                <button class="btn-agregar-carrito">Añadir al Carrito</button>
                <a href="#" class="btn-contacto">Consultar por WhatsApp</a>
            </div>
        `;

        // Lógica del carrusel
        const imgs = card.querySelectorAll(".carousel-img");
        let index = 0;
        card.querySelector(".next").addEventListener("click", () => {
            imgs[index].classList.remove("active");
            index = (index + 1) % imgs.length;
            imgs[index].classList.add("active");
        });
        card.querySelector(".prev").addEventListener("click", () => {
            imgs[index].classList.remove("active");
            index = (index - 1 + imgs.length) % imgs.length;
            imgs[index].classList.add("active");
        });
    } 
    else {
        // Card normal
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <div class="card-content">
                <h3>${prod.nombre}</h3>
                <span class="precio">$${prod.precio}</span>
                <br>
                <button class="btn-agregar-carrito">Añadir al Carrito</button>
                <a href="#" class="btn-contacto">Consultar por WhatsApp</a>
            </div>
        `;
    }

    // Botón WhatsApp
    card.querySelector(".btn-contacto").addEventListener("click", function(e) {
        e.preventDefault();
        const mensaje = `Hola, me interesa el ${prod.nombre}`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    });

    // Botón Añadir al Carrito
    const btnAgregar = card.querySelector(".btn-agregar-carrito");
    if (btnAgregar) {
        btnAgregar.addEventListener("click", function(e) {
            e.preventDefault();
            agregarAlCarrito(prod);
        });
    }

    contenedor.appendChild(card);
});

// Función de filtrado por código o nombre
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

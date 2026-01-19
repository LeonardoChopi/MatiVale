const numero = "+59892882637";
const inputBuscador = document.getElementById("inputBuscador");

const productos = [
    {
        nombre: "Botella 1L jabón para burbujeros",
        precio: "$170",
        codigo: "2025021300548"
    },
    {
        nombre: "Camión amarillo plástico caja",
        precio: "$370",
        codigo: "2024080700047"
    },
    {
        nombre: "Minicompresor 12v",
        precio: "$990",
        codigo: "7737440348944"
    }
];


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
                <span class="precio">${prod.precio}</span> 
                <br>
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
                <span class="precio">${prod.precio}</span>
                <br>
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

    contenedor.appendChild(card);
});

// Función de filtrado por código
if (inputBuscador) {
    inputBuscador.addEventListener("input", function(e) {
        const codigoBuscado = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll(".card");
        
        cards.forEach((card, index) => {
            const codigoProducto = productos[index].codigo.toLowerCase();
            
            if (codigoBuscado === "") {
                // Si está vacío, mostrar todos
                card.style.display = "";
            } else if (codigoProducto.includes(codigoBuscado)) {
                // Si coincide el código, mostrar
                card.style.display = "";
            } else {
                // Si no coincide, ocultar
                card.style.display = "none";
            }
        });
    });
}

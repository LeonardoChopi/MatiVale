const numero = "+59892882637";

const productos = [
    {
        nombre: "Tableta de dibujo",
        descripcion: "Para que los niños dibujen y pinten con su imaginación.",
        precio: "$295",
        imagenes: ["img/Producto1-a.jpg", "img/Producto1-b.jpg"]
    },
    {
        nombre: "Set pinturas para uñas y cara",
        descripcion: "Pinturas seguras y divertidas para que los más chicos se diviertan.",
        precio: "$295",
        imagen: "img/Producto3.jpg"   // 👈 ahora solo string
    },
    {
        nombre: "Set juego limpieza",
        descripcion: "Set de limpieza para que los niños jueguen a ser grandes.",
        precio: "$295",
        imagen: "img/producto4.jpg"   // 👈 ojo con mayúsculas/minúsculas
    },
    {
        nombre: "Tambor",
        descripcion: "Un tambor para que los niños hagan música.",
        precio: "$295",
        imagen: "img/producto5.jpg"   // 👈 ojo con mayúsculas/minúsculas
    },
    {
        nombre: "Autos a control remoto",
        descripcion: "Autos a control remoto para que los niños jueguen y se diviertan.",
        precio: "Desde $590 a $690",
        imagenes: ["img/Producto6-a.jpg", "img/Producto6-b.jpg", "img/Producto6-c.jpg", "img/Producto6-d.jpg"]
    },
    {
        nombre: "Variedad de juguetes",
        descripcion: "Una gran variedad de juguetes para todos los gustos.",
        precio: "$100",
        imagen: "img/producto7.jpg"   // 👈 ojo con mayúsculas/minúsculas
    },
    {
        nombre: "Juego de decoración de peluqueria",
        descripcion: "Juego de decoración de peluquería para que los niños jueguen a ser estilistas.",
        precio: "$595",
        imagen: "img/producto8.jpg"   // 👈 ojo con mayúsculas/minúsculas
    },
    {
        nombre: "ukelele para niños",
        descripcion: "Un ukelele para que los niños aprendan a tocar música.",
        precio: "$580",
        imagen: "img/producto9.jpg"   // 👈 ojo con mayúsculas/minúsculas
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
                <p>${prod.descripcion}</p>
                <span class="precio">${prod.precio}</span> 
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
    } else {
        // Card normal
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <div class="card-content">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <span class="precio">${prod.precio}</span>
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

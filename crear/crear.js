document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("formProducto");
    const resultado = document.querySelector(".devolverproducto p");

    const contenedorCategorias = document.getElementById("contenedorCategorias");
    const contenedorImagenes = document.getElementById("contenedorImagenes");

    const btnAgregarCategoria = document.getElementById("agregarCategoria");
    const btnAgregarImagen = document.getElementById("agregarImagen");

    // ==============================
    // AUTOCOMPLETAR CATEGORIAS
    // ==============================

    const datalist = document.createElement("datalist");
    datalist.id = "listaCategorias";
    document.body.appendChild(datalist);

    let categoriasExistentes = [];

    if (typeof productos !== "undefined") {

        productos.forEach(prod => {

            if (Array.isArray(prod.categoria)) {
                prod.categoria.forEach(cat => categoriasExistentes.push(cat));
            } else if (prod.categoria) {
                categoriasExistentes.push(prod.categoria);
            }

        });

        // Eliminar duplicados
        categoriasExistentes = [...new Set(categoriasExistentes)];

        categoriasExistentes.forEach(cat => {
            const option = document.createElement("option");
            option.value = cat;
            datalist.appendChild(option);
        });
    }

    // Agregar datalist al primer input
    const primerInputCategoria = document.querySelector(".categoriaInput");
    if (primerInputCategoria) {
        primerInputCategoria.setAttribute("list", "listaCategorias");
    }

    // ==============================
    // AGREGAR CATEGORIA
    // ==============================

    btnAgregarCategoria.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Categoria";
        input.classList.add("categoriaInput");
        input.setAttribute("list", "listaCategorias");
        contenedorCategorias.appendChild(input);
    });

    // ==============================
    // AGREGAR IMAGEN
    // ==============================

    btnAgregarImagen.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "URL imagen";
        input.classList.add("imagenInput");
        contenedorImagenes.appendChild(input);
    });

    // ==============================
    // SUBMIT
    // ==============================

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const descripcion = document.getElementById("descripcion").value.trim();
        const precio = document.getElementById("precio").value.trim();
        const codigo = document.getElementById("codigo").value.trim();

        // ===== CATEGORIAS =====
        const categoriasInputs = document.querySelectorAll(".categoriaInput");
        let categorias = [];

        categoriasInputs.forEach(input => {
            if (input.value.trim() !== "") {
                categorias.push(input.value.trim());
            }
        });

        let categoriaFinal;
        if (categorias.length > 1) {
            categoriaFinal = categorias;
        } else {
            categoriaFinal = categorias[0] || "";
        }

        // ===== IMAGENES =====
        const imagenesInputs = document.querySelectorAll(".imagenInput");
        let imagenes = [];

        imagenesInputs.forEach(input => {
            if (input.value.trim() !== "") {
                imagenes.push(input.value.trim());
            }
        });

        let producto;

        if (imagenes.length > 1) {
            producto = {
                nombre,
                categoria: categoriaFinal,
                descripcion,
                precio,
                codigo,
                imagenes
            };
        } else {
            producto = {
                nombre,
                categoria: categoriaFinal,
                descripcion,
                precio,
                codigo,
                imagen: imagenes[0] || ""
            };
        }

        resultado.innerHTML = `<pre>${JSON.stringify(producto, null, 4)}</pre>`;
    });

});

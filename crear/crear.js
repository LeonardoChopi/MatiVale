document.addEventListener("DOMContentLoaded", function() {

    const resultado = document.querySelector(".devolverproducto p");
    const btnCrear = document.getElementById("crearproducto");

    const btnAgregarCategoria = document.getElementById("agregarCategoria");
    const contenedorCategorias = document.getElementById("contenedorCategorias");

    const btnAgregarImagen = document.getElementById("agregarImagen");
    const contenedorImagenes = document.getElementById("contenedorImagenes");

    // Producto disponible globalmente
    window.productoActual = null;

    // ==============================
    // AGREGAR CATEGORIA
    // ==============================

    btnAgregarCategoria.addEventListener("click", function() {

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Categoria";
        input.classList.add("categoriaInput");

        contenedorCategorias.appendChild(input);
    });

    // ==============================
    // AGREGAR IMAGEN
    // ==============================

    btnAgregarImagen.addEventListener("click", function() {

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "URL imagen";
        input.classList.add("imagenInput");

        contenedorImagenes.appendChild(input);
    });

    // ==============================
    // OBTENER PRODUCTO DESDE FORM
    // ==============================

    function obtenerProductoDesdeFormulario() {

        const nombre = document.getElementById("nombre").value.trim();
        const descripcion = document.getElementById("descripcion").value.trim();
        const precio = document.getElementById("precio").value.trim();
        const codigo = document.getElementById("codigo").value.trim();

        if (!nombre || !precio || !codigo) {
            alert("Completa al menos nombre, precio y código.");
            return null;
        }

        // ===== Categorías =====
        const categoriasInputs = document.querySelectorAll(".categoriaInput");
        let categorias = [];

        categoriasInputs.forEach(input => {
            if (input.value.trim() !== "") {
                categorias.push(input.value.trim());
            }
        });

        let categoriaFinal =
            categorias.length > 1 ? categorias : categorias[0] || "";

        // ===== Imágenes =====
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

        return producto;
    }

    // ==============================
    // CREAR PRODUCTO (mostrar en pantalla)
    // ==============================

    btnCrear.addEventListener("click", function() {

        const producto = obtenerProductoDesdeFormulario();
        if (!producto) return;

        window.productoActual = producto;

        resultado.innerHTML =
            `<pre>${JSON.stringify(producto, null, 4)
                .replace(/"([^"]+)":/g, '$1:')}</pre>`;
    });

});

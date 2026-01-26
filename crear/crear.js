document.addEventListener("DOMContentLoaded", function() {

    const resultado = document.querySelector(".devolverproducto p");
    const btnCrear = document.getElementById("crearproducto");

    window.productoActual = null; // producto disponible globalmente

    function obtenerProductoDesdeFormulario() {

        const nombre = document.getElementById("nombre").value.trim();
        const descripcion = document.getElementById("descripcion").value.trim();
        const precio = document.getElementById("precio").value.trim();
        const codigo = document.getElementById("codigo").value.trim();

        // Categorías
        const categoriasInputs = document.querySelectorAll(".categoriaInput");
        let categorias = [];

        categoriasInputs.forEach(input => {
            if (input.value.trim() !== "") {
                categorias.push(input.value.trim());
            }
        });

        let categoriaFinal = categorias.length > 1 ? categorias : categorias[0] || "";

        // Imágenes
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

    btnCrear.addEventListener("click", function() {

        const producto = obtenerProductoDesdeFormulario();

        window.productoActual = producto;

        resultado.innerHTML =
            `<pre>${JSON.stringify(producto, null, 4)
                .replace(/"([^"]+)":/g, '$1:')}</pre>`;
    });

});

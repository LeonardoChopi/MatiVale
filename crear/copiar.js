document.addEventListener("DOMContentLoaded", function() {

    const btnCopiarFragmento = document.getElementById("copiarFragmento");
    const btnCopiarTodo = document.getElementById("copiarTodo");
    const btnCopiarTabla = document.getElementById("copiarFragmentotablatabla");

    // ==============================
    // FUNCION: Obtener producto desde el formulario
    // ==============================

    function obtenerProductoDesdeFormulario() {

        const nombre = document.getElementById("nombre")?.value.trim();
        const descripcion = document.getElementById("descripcion")?.value.trim();
        const precio = document.getElementById("precio")?.value.trim();
        const codigo = document.getElementById("codigo")?.value.trim();

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
    // Convertir a formato JS (sin comillas en claves)
    // ==============================

    function convertirAFormatoJS(obj) {
        return JSON.stringify(obj, null, 4)
            .replace(/"([^"]+)":/g, '$1:');
    }

    // ==============================
    // COPIAR FRAGMENTO OBJETO
    // ==============================

    btnCopiarFragmento?.addEventListener("click", async function() {

        const producto = obtenerProductoDesdeFormulario();
        if (!producto) return;

        const texto = convertirAFormatoJS(producto);

        await navigator.clipboard.writeText(texto);
        alert("Fragmento copiado ✅");
    });

    // ==============================
    // COPIAR TODO productos.js + nuevo producto
    // ==============================

    btnCopiarTodo?.addEventListener("click", async function() {

        const producto = obtenerProductoDesdeFormulario();
        if (!producto) return;

        if (typeof productos === "undefined") {
            alert("No se encontró el array productos.");
            return;
        }

        const nuevoArray = [...productos, producto];

        const codigoCompleto =
`const productos = ${convertirAFormatoJS(nuevoArray)};`;

        await navigator.clipboard.writeText(codigoCompleto);

        alert("Código completo copiado con nuevo producto ✅");
    });

    // ==============================
    // COPIAR FRAGMENTO FORMATO TABLA
    // ==============================

    btnCopiarTabla?.addEventListener("click", async function() {

        const producto = obtenerProductoDesdeFormulario();
        if (!producto) return;

        let categoriasTexto = "";

        if (Array.isArray(producto.categoria)) {
            categoriasTexto = producto.categoria.join(", ");
        } else {
            categoriasTexto = producto.categoria || "";
        }

        const filaTabla =
`<tr>
    <td>${producto.nombre}</td>
    <td>${categoriasTexto}</td>
    <td>${producto.precio}</td>
    <td>${producto.codigo}</td>
</tr>`;

        await navigator.clipboard.writeText(filaTabla);

        alert("Fragmento de tabla copiado ✅");
    });

});

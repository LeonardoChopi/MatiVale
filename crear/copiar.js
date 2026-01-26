document.addEventListener("DOMContentLoaded", function() {

    const btnCopiarFragmento = document.getElementById("copiarFragmento");
    const btnCopiarTodo = document.getElementById("copiarTodo");
    const resultado = document.querySelector(".devolverproducto p");

    // Función para convertir JSON a formato JS sin comillas en claves
    function convertirAFormatoJS(obj) {
        return JSON.stringify(obj, null, 4)
            .replace(/"([^"]+)":/g, '$1:');
    }

    // ==============================
    // COPIAR SOLO FRAGMENTO
    // ==============================

    btnCopiarFragmento.addEventListener("click", async function() {

        const texto = resultado.innerText.trim();

        if (!texto) {
            alert("No hay producto generado.");
            return;
        }

        try {
            const objeto = JSON.parse(texto);
            const formateado = convertirAFormatoJS(objeto);

            await navigator.clipboard.writeText(formateado);
            alert("Fragmento copiado ✅");

        } catch (error) {
            alert("Error al procesar el producto.");
        }
    });

    // ==============================
    // COPIAR TODO productos.js + nuevo producto
    // ==============================

    btnCopiarTodo.addEventListener("click", async function() {

        const texto = resultado.innerText.trim();

        if (!texto) {
            alert("No hay producto generado.");
            return;
        }

        if (typeof productos === "undefined") {
            alert("No se encontró el array productos.");
            return;
        }

        try {

            const nuevoProducto = JSON.parse(texto);

            const nuevoArray = [...productos, nuevoProducto];

            const codigoCompleto =
`const productos = ${convertirAFormatoJS(nuevoArray)};`;

            await navigator.clipboard.writeText(codigoCompleto);

            alert("Código completo copiado con nuevo producto ✅");

        } catch (error) {
            alert("Error al procesar el producto.");
            console.error(error);
        }

    });

});

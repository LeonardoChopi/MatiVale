document.addEventListener("DOMContentLoaded", function() {

    const btnCopiarFragmento = document.getElementById("copiarFragmento");
    const btnCopiarTodo = document.getElementById("copiarTodo");
    const btnCopiarTabla = document.getElementById("copiarTodotabla");

    const resultado = document.querySelector(".devolverproducto p");

    // ==============================
    // UTILIDAD: convertir a JS sin comillas en atributos
    // ==============================

    function convertirAFormatoJS(obj) {
        return JSON.stringify(obj, null, 4)
            .replace(/"([^"]+)":/g, '$1:');
    }

    function copiarAlPortapapeles(texto, mensaje) {
        navigator.clipboard.writeText(texto)
            .then(() => alert(mensaje))
            .catch(() => alert("Error al copiar."));
    }

    // ==============================
    // 1️⃣ COPIAR SOLO FRAGMENTO
    // ==============================

    btnCopiarFragmento.addEventListener("click", function() {

        if (!window.productoActual) {
            alert("No hay producto creado.");
            return;
        }

        const formateado = convertirAFormatoJS(window.productoActual);

        copiarAlPortapapeles(formateado, "Fragmento copiado ✅");
    });

    // ==============================
    // 2️⃣ COPIAR TODO productos.js + producto actual
    // ==============================

    btnCopiarTodo.addEventListener("click", function() {

        if (!window.productoActual) {
            alert("No hay producto creado.");
            return;
        }

        if (typeof productos === "undefined") {
            alert("No se encontró el array productos.");
            return;
        }

        const nuevoArray = [...productos, window.productoActual];

        const codigoCompleto =
`const productos = ${convertirAFormatoJS(nuevoArray)};`;

        copiarAlPortapapeles(codigoCompleto, "Código completo copiado ✅");
    });

    // ==============================
    // 3️⃣ COPIAR TODOS LOS ACUMULADOS
    // ==============================

    btnCopiarTabla.addEventListener("click", function() {

        if (!window.productosAcumulados || window.productosAcumulados.length === 0) {
            alert("No hay productos acumulados.");
            return;
        }

        const codigoCompleto =
`const productos = ${convertirAFormatoJS(window.productosAcumulados)};`;

        copiarAlPortapapeles(codigoCompleto, "Productos acumulados copiados ✅");
    });

});

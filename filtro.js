/* ========================================
   LÓGICA DE FILTRADO DE PRODUCTOS
   ======================================== */

// Variables de los elementos del filtro
const categoriaSelect = document.getElementById("categoriaSelect");
const precioMin = document.getElementById("precioMin");
const precioMax = document.getElementById("precioMax");
const precioMinValor = document.getElementById("precioMinValor");
const precioMaxValor = document.getElementById("precioMaxValor");
const habilitarMinimo = document.getElementById("habilitarminimo");
const habilitarMaximo = document.getElementById("habilitarmaximo");

/* ========================================
   OBTENER PRECIOS MÍNIMO Y MÁXIMO
   ======================================== */

function obtenerPreciosLimites() {
    const precios = productos.map(prod => parseInt(prod.precio));
    return {
        minimo: Math.min(...precios),
        maximo: Math.max(...precios)
    };
}

/* ========================================
   CARGAR CATEGORÍAS ÚNICAS
   ======================================== */

function cargarCategorias() {
    const todasLasCategorias = productos.flatMap(prod => prod.categoria);
    const categoriasUnicas = [...new Set(todasLasCategorias)];

    categoriasUnicas.forEach(categoria => {
        const option = document.createElement("option");
        option.value = categoria;
        option.textContent = categoria;
        categoriaSelect.appendChild(option);
    });
}

/* ========================================
   ACTUALIZAR RANGO DE PRECIOS
   ======================================== */

function actualizarRangoPrecio() {
    const limites = obtenerPreciosLimites();
    
    precioMin.min = limites.minimo;
    precioMin.max = limites.maximo;
    precioMin.value = limites.minimo;
    
    precioMax.min = limites.minimo;
    precioMax.max = limites.maximo;
    precioMax.value = limites.maximo;
    
    precioMinValor.textContent = `$${limites.minimo}`;
    precioMaxValor.textContent = `$${limites.maximo}`;
}

/* ========================================
   FUNCIÓN PRINCIPAL DE FILTRADO
   ======================================== */

function aplicarFiltros() {
    const categoriaSeleccionada = categoriaSelect.value;
    const minimoActivo = habilitarMinimo.checked;
    const maximoActivo = habilitarMaximo.checked;

    const cards = document.querySelectorAll(".card");
    let productosVisibles = 0;

    cards.forEach((card, index) => {
        const producto = productos[index];
        const precioProducto = parseInt(producto.precio);

        const cumpleCategoria =
            categoriaSeleccionada === "todos" ||
            producto.categoria.includes(categoriaSeleccionada);

        let cumplePrecio = true;

        if (minimoActivo && precioProducto < parseInt(precioMin.value)) {
            cumplePrecio = false;
        }

        if (maximoActivo && precioProducto > parseInt(precioMax.value)) {
            cumplePrecio = false;
        }

        if (cumpleCategoria && cumplePrecio) {
            card.style.display = "";
            productosVisibles++;
        } else {
            card.style.display = "none";
        }
    });

    // Mostrar mensaje si no hay productos
    const contenedor = document.getElementById("productos");
    let mensajeVacio = document.getElementById("mensajeVacio");

    if (productosVisibles === 0) {
        if (!mensajeVacio) {
            mensajeVacio = document.createElement("div");
            mensajeVacio.id = "mensajeVacio";
            mensajeVacio.classList.add("mensaje-vacio");
            mensajeVacio.textContent =
                "No hay productos que coincidan con los filtros seleccionados";
            contenedor.appendChild(mensajeVacio);
        }
        mensajeVacio.style.display = "";
    } else {
        if (mensajeVacio) {
            mensajeVacio.style.display = "none";
        }
    }
}

/* ========================================
   EVENT LISTENERS
   ======================================== */

// Categoría
if (categoriaSelect) {
    categoriaSelect.addEventListener("change", aplicarFiltros);
}

// Precio mínimo
if (precioMin) {
    precioMin.addEventListener("input", function() {
        precioMinValor.textContent = `$${this.value}`;
        aplicarFiltros();
    });
}

// Precio máximo
if (precioMax) {
    precioMax.addEventListener("input", function() {
        precioMaxValor.textContent = `$${this.value}`;
        aplicarFiltros();
    });
}

// Habilitar mínimo
if (habilitarMinimo) {
    habilitarMinimo.addEventListener("change", function() {
        precioMin.disabled = !this.checked;
        aplicarFiltros();
    });

    precioMin.disabled = !habilitarMinimo.checked;
}

// Habilitar máximo
if (habilitarMaximo) {
    habilitarMaximo.addEventListener("change", function() {
        precioMax.disabled = !this.checked;
        aplicarFiltros();
    });

    precioMax.disabled = !habilitarMaximo.checked;
}

/* ========================================
   INICIALIZACIÓN
   ======================================== */

document.addEventListener("DOMContentLoaded", function() {
    cargarCategorias();
    actualizarRangoPrecio();
});

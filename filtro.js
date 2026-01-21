/* ========================================
   LÓGICA DE FILTRADO DE PRODUCTOS
   ======================================== */

// Variables de los elementos del filtro
const categoriaSelect = document.getElementById("categoriaSelect");
const precioMin = document.getElementById("precioMin");
const precioMax = document.getElementById("precioMax");
const precioMinValor = document.getElementById("precioMinValor");
const precioMaxValor = document.getElementById("precioMaxValor");

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
    // Obtener categorías únicas de los productos
    const categoriasUnicas = [...new Set(productos.map(prod => prod.categoria))];
    
    // Agregar opciones al select
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
    
    // Configurar los límites de los inputs
    precioMin.min = limites.minimo;
    precioMin.max = limites.maximo;
    precioMin.value = limites.minimo;
    
    precioMax.min = limites.minimo;
    precioMax.max = limites.maximo;
    precioMax.value = limites.maximo;
    
    // Actualizar los valores mostrados
    precioMinValor.textContent = `$${limites.minimo}`;
    precioMaxValor.textContent = `$${limites.maximo}`;
}

/* ========================================
   FUNCIÓN PRINCIPAL DE FILTRADO
   ======================================== */

function aplicarFiltros() {
    const categoriaSeleccionada = categoriaSelect.value;
    const precioMinimo = parseInt(precioMin.value);
    const precioMaximo = parseInt(precioMax.value);
    const cards = document.querySelectorAll(".card");
    let productosVisibles = 0;
    
    // Asegurar que el precio mínimo no sea mayor que el máximo
    if (precioMinimo > precioMaximo) {
        precioMin.value = precioMaximo;
    }
    
    const precioMinFinal = parseInt(precioMin.value);
    const precioMaxFinal = parseInt(precioMax.value);
    
    cards.forEach((card, index) => {
        const producto = productos[index];
        const precioProducto = parseInt(producto.precio);
        
        // Verificar si el producto cumple con los filtros
        const cumpleCategoria = categoriaSeleccionada === "todos" || producto.categoria === categoriaSeleccionada;
        const cumplePrecio = precioProducto >= precioMinFinal && precioProducto <= precioMaxFinal;
        
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
            mensajeVacio.textContent = "No hay productos que coincidan con los filtros seleccionados";
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
   EVENT LISTENERS DE FILTROS
   ======================================== */

// Filtro de categoría
if (categoriaSelect) {
    categoriaSelect.addEventListener("change", function() {
        aplicarFiltros();
    });
}

// Filtro de precio mínimo
if (precioMin) {
    precioMin.addEventListener("input", function() {
        const valorMin = parseInt(this.value);
        precioMinValor.textContent = `$${valorMin}`;
        aplicarFiltros();
    });
}

// Filtro de precio máximo
if (precioMax) {
    precioMax.addEventListener("input", function() {
        const valorMax = parseInt(this.value);
        precioMaxValor.textContent = `$${valorMax}`;
        aplicarFiltros();
    });
}

/* ========================================
   INICIALIZACIÓN
   ======================================== */

document.addEventListener("DOMContentLoaded", function() {
    cargarCategorias();
    actualizarRangoPrecio();
});

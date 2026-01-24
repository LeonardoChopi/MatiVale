/* ========================================
   CONFIGURACIÓN INICIAL DEL CARRITO
   ======================================== */
   
let carrito = [];

const carritoBtn = document.getElementById("carritoBtn");
const carritoModal = document.getElementById("carritoModal");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const carritoItems = document.getElementById("carritoItems");
const carritoVacio = document.getElementById("carritoVacio");


/* ========================================
   LOCAL STORAGE
   ======================================== */

// Cargar carrito desde localStorage
function cargarCarritoDelStorage() {
    const carritoGuardado = localStorage.getItem("carrito");

    if (carritoGuardado) {
        try {
            carrito = JSON.parse(carritoGuardado);
            console.log("✓ Carrito cargado desde localStorage");
        } catch (e) {
            console.error("Error al cargar carrito:", e);
            carrito = [];
        }
    }
}

// Guardar carrito
function guardarCarritoEnStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Ejecutar carga inicial
cargarCarritoDelStorage();


/* ========================================
   CONTROL DE MODAL
   ======================================== */

if (carritoBtn && carritoModal) {
    carritoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        carritoModal.style.display = "flex";
        actualizarCarrito();
    });
}

function cerrarCarritoConAnimacion() {
    const carritoContent = document.querySelector(".carrito-content");

    if (!carritoContent) return;

    carritoContent.classList.add("slide-out");

    setTimeout(() => {
        carritoModal.style.display = "none";
        carritoContent.classList.remove("slide-out");
    }, 300);
}

if (cerrarCarrito) {
    cerrarCarrito.addEventListener("click", (e) => {
        e.preventDefault();
        cerrarCarritoConAnimacion();
    });
}

if (carritoModal) {
    carritoModal.addEventListener("click", (e) => {
        if (e.target === carritoModal) {
            cerrarCarritoConAnimacion();
        }
    });
}


/* ========================================
   AGREGAR PRODUCTOS
   ======================================== */

function agregarAlCarrito(producto) {

    if (!producto) return;

    const productoExistente = carrito.find(
        item => item.codigo === producto.codigo
    );

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            nombre: producto.nombre,
            precio: parseInt(producto.precio),
            codigo: producto.codigo,
            cantidad: 1
        });
    }

    console.log(`✓ ${producto.nombre} agregado al carrito`);

    guardarCarritoEnStorage();
    actualizarCarrito();
}


/* ========================================
   ACTUALIZAR VISUAL
   ======================================== */

function actualizarCarrito() {

    if (!carritoItems || !carritoVacio) return;

    carritoItems.innerHTML = "";

    if (carrito.length === 0) {
        carritoVacio.style.display = "block";
        return;
    }

    carritoVacio.style.display = "none";

    carrito.forEach((producto, index) => {

        const item = document.createElement("div");
        item.className = "item-carrito";

        item.innerHTML = `
            <div class="item-info">
                <h4>${producto.nombre}</h4>
                <p class="item-codigo">Código: ${producto.codigo}</p>
                <p class="item-precio">$${producto.precio}</p>
            </div>

            <div class="item-cantidad">
                <button class="btn-cantidad" onclick="disminuirCantidad(${index})">−</button>
                <span>${producto.cantidad}</span>
                <button class="btn-cantidad" onclick="aumentarCantidad(${index})">+</button>
            </div>

            <div class="item-subtotal">
                $${producto.precio * producto.cantidad}
            </div>

            <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">✕</button>
        `;

        carritoItems.appendChild(item);
    });

    agregarTotal();
}


/* ========================================
   TOTAL
   ======================================== */

function agregarTotal() {

    const total = carrito.reduce(
        (sum, producto) => sum + (producto.precio * producto.cantidad),
        0
    );

    const totalDiv = document.createElement("div");
    totalDiv.className = "carrito-total";

    totalDiv.innerHTML = `
        <h3>Total: $${total}</h3>

        <div class="btns-carrito">

            <button class="btn-vaciar" onclick="vaciarCarrito()">
                🗑️ Vaciar Carrito
            </button>

            <button class="btn-imprimir" onclick="generarPDFCarrito()">
                🖨️ Imprimir Carrito
            </button>

        </div>
    `;

    carritoItems.appendChild(totalDiv);
}


/* ========================================
   FUNCIONES DE CANTIDAD
   ======================================== */

function aumentarCantidad(index) {
    carrito[index].cantidad++;
    guardarCarritoEnStorage();
    actualizarCarrito();
}

function disminuirCantidad(index) {

    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        eliminarDelCarrito(index);
        return;
    }

    guardarCarritoEnStorage();
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarCarritoEnStorage();
    actualizarCarrito();
}


/* ========================================
   VACIAR CARRITO
   ======================================== */

function vaciarCarrito() {

    if (carrito.length === 0) {
        alert("El carrito ya está vacío");
        return;
    }

    if (confirm("¿Deseas eliminar todo el carrito?")) {
        carrito = [];
        guardarCarritoEnStorage();
        actualizarCarrito();
        console.log("✓ Carrito vaciado");
    }
}

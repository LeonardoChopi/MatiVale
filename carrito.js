/* ========================================
   CONFIGURACIÓN INICIAL DEL CARRITO
   ======================================== */

const carritoBtn = document.getElementById("carritoBtn");
const carritoModal = document.getElementById("carritoModal");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const carritoItems = document.getElementById("carritoItems");
const carritoVacio = document.getElementById("carritoVacio");

// Array para almacenar productos del carrito (se borra al recargar)
let carrito = [];

/* ========================================
   CONTROL DE APERTURA/CIERRE DEL CARRITO
   ======================================== */
   

// Abrir carrito
if (carritoBtn) {
    carritoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        carritoModal.style.display = "flex";
        actualizarCarrito();
    });
}

// Cerrar carrito con botón X
if (cerrarCarrito) {
    cerrarCarrito.addEventListener("click", () => {
        carritoModal.style.display = "none";
    });
}

// Cerrar carrito al hacer clic fuera del contenido
if (carritoModal) {
    carritoModal.addEventListener("click", (e) => {
        if (e.target === carritoModal) {
            carritoModal.style.display = "none";
        }
    });
}

/* ========================================
   GESTIÓN DE PRODUCTOS EN EL CARRITO
   ======================================== */

// Función para agregar productos al carrito
// Si el producto ya existe, aumenta la cantidad
function agregarAlCarrito(producto) {
    // Buscar si el producto ya existe en el carrito
    const productoExistente = carrito.find(item => item.codigo === producto.codigo);
    
    if (productoExistente) {
        // Si existe, aumentar la cantidad
        productoExistente.cantidad++;
    } else {
        // Si no existe, agregarlo con cantidad 1
        carrito.push({
            nombre: producto.nombre,
            precio: parseInt(producto.precio),
            codigo: producto.codigo,
            cantidad: 1
        });
    }
    
    // Mostrar notificación en consola
    console.log(`✓ ${producto.nombre} agregado al carrito`);
    
    // Actualizar visualización del carrito
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    carritoItems.innerHTML = "";
    
    if (carrito.length === 0) {
        carritoVacio.style.display = "block";
    } else {
        carritoVacio.style.display = "none";
        
        // Mostrar cada producto en el carrito
        carrito.forEach((producto, index) => {
            const itemCarrito = document.createElement("div");
            itemCarrito.className = "item-carrito";
            itemCarrito.innerHTML = `
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
            carritoItems.appendChild(itemCarrito);
        });
        
        // Agregar el total al final
        agregarTotal();
    }
}

// Función para calcular y mostrar el total
function agregarTotal() {
    const total = carrito.reduce((sum, producto) => sum + (producto.precio * producto.cantidad), 0);
    
    const totalDiv = document.createElement("div");
    totalDiv.className = "carrito-total";
    totalDiv.innerHTML = `
        <h3>Total: $${total}</h3>
    `;
    carritoItems.appendChild(totalDiv);
}

/* ========================================
   FUNCIONES DE CANTIDAD Y ELIMINACIÓN
   ======================================== */

// Aumentar cantidad de un producto
function aumentarCantidad(index) {
    carrito[index].cantidad++;
    actualizarCarrito();
}

// Disminuir cantidad de un producto
// Si llega a 0, elimina el producto del carrito
function disminuirCantidad(index) {
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        eliminarDelCarrito(index);
    }
    actualizarCarrito();
}

// Eliminar producto del carrito completamente
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

const carritoBtn = document.getElementById("carritoBtn");
const carritoModal = document.getElementById("carritoModal");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const carritoItems = document.getElementById("carritoItems");
const carritoVacio = document.getElementById("carritoVacio");

// Array para almacenar productos del carrito (no se guarda)
let carrito = [];

// Abrir carrito
if (carritoBtn) {
    carritoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        carritoModal.style.display = "flex";
        actualizarCarrito();
    });
}

// Cerrar carrito
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

// Función para agregar productos al carrito
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
    
    // Mostrar notificación
    console.log(`✓ ${producto.nombre} agregado al carrito`);
    
    // Actualizar carrito
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    carritoItems.innerHTML = "";
    
    if (carrito.length === 0) {
        carritoVacio.style.display = "block";
    } else {
        carritoVacio.style.display = "none";
        
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
        
        // Agregar total al final
        agregarTotal();
    }
}

// Función para agregar el total al final
function agregarTotal() {
    const total = carrito.reduce((sum, producto) => sum + (producto.precio * producto.cantidad), 0);
    
    const totalDiv = document.createElement("div");
    totalDiv.className = "carrito-total";
    totalDiv.innerHTML = `
        <h3>Total: $${total}</h3>
    `;
    carritoItems.appendChild(totalDiv);
}

// Función para aumentar cantidad
function aumentarCantidad(index) {
    carrito[index].cantidad++;
    actualizarCarrito();
}

// Función para disminuir cantidad
function disminuirCantidad(index) {
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        eliminarDelCarrito(index);
    }
    actualizarCarrito();
}

// Función para eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

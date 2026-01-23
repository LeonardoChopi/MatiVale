/* ========================================
   CARGAR PRODUCTO EN PÁGINA DE DESCRIPCIÓN
   ======================================== */

// Obtener el código del producto de la URL
const params = new URLSearchParams(window.location.search);
const codigoProducto = params.get('codigo');

// Si no hay código, redirigir a index
if (!codigoProducto) {
    window.location.href = 'Index.html';
}

// Buscar el producto en el array
const producto = productos.find(p => p.codigo === codigoProducto);

// Si no se encuentra, redirigir a index
if (!producto) {
    window.location.href = 'Index.html';
}

/* ========================================
   RENDERIZAR DATOS DEL PRODUCTO
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    const imagenPorDefecto = "https://png.pngtree.com/png-clipart/20230703/original/pngtree-cardboard-boxes-png-image_9248461.png";
    
    // Obtener contenedores
    const imgContainer = document.querySelector('.description img');
    const contenido = document.querySelector('.contenido');

    // Asignar imagen
    const imagen = producto.imagen || imagenPorDefecto;
    imgContainer.src = imagen;
    imgContainer.alt = producto.nombre;

    // Renderizar contenido
    contenido.innerHTML = `
        <h1>${producto.nombre}</h1>
        <p class="categoria"><strong>Categoría:</strong> ${producto.categoria}</p>
        <p class="codigo"><strong>Código:</strong> ${producto.codigo}</p>
        <p class="descripcion">${producto.descripcion || 'Sin descripción disponible'}</p>
        <div class="precio-container">
            <span class="precio">$${producto.precio}</span>
        </div>
        <div class="botones-accion">
            <button class="btn-agregar-carrito">Añadir al Carrito</button>
            <a href="https://wa.me/+59892882637" target="_blank" class="btn-contacto">Consultar por WhatsApp</a>
            <a href="https://m.me/mirtha.pacilio" target="_blank" class="btn-contacto-facebook">Consultar por Facebook</a>
        </div>
        <a href="Index.html" class="btn-volver">← Volver a productos</a>
    `;

    // Evento del botón Añadir al Carrito
    const btnAgregar = contenido.querySelector('.btn-agregar-carrito');
    if (btnAgregar) {
        btnAgregar.addEventListener('click', function() {
            agregarAlCarrito(producto);
        });
    }
});

// Inicializar eventos de contacto (si existen)
if (typeof inicializarBotonesContacto === 'function') {
    inicializarBotonesContacto();
}

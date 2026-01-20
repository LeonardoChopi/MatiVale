/* ========================================
   FUNCIONES DE CONTACTO (WhatsApp)
   ======================================== */

const numero = "+59892882637";

/**
 * Abre WhatsApp con un mensaje predefinido sobre el producto
 * @param {Object} producto - El objeto del producto con nombre
 */
function abrirWhatsApp(producto) {
    const mensaje = `Hola, tiene disponibilidad de: ${producto.nombre}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

/**
 * Inicializa los eventos de los botones de contacto (WhatsApp)
 * Se debe llamar después de que se generen las tarjetas de productos
 */
function inicializarBotonesContacto() {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach((card, index) => {
        const btnContacto = card.querySelector(".btn-contacto");
        if (btnContacto && productos[index]) {
            btnContacto.addEventListener("click", function(e) {
                e.preventDefault();
                abrirWhatsApp(productos[index]);
            });
        }
    });
}

/**
 * Envía el carrito completo por WhatsApp
 * @param {Array} carritoItems - Array con los productos del carrito
 */
function consultarCarritoPorWhatsApp(carritoItems) {
    if (carritoItems.length === 0) {
        alert("El carrito está vacío");
        return;
    }
    
    // Construir mensaje con todos los productos
    let mensaje = "Hola, me gustaría consultar sobre la disponibilidad de:\n\n";
    let total = 0;
    
    carritoItems.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        mensaje += `${index + 1}. ${item.nombre}\n`;
        mensaje += `   Cantidad: ${item.cantidad}\n`;
        mensaje += `   Precio unitario: $${item.precio}\n`;
        mensaje += `   Subtotal: $${subtotal}\n\n`;
    });
    
    mensaje += `━━━━━━━━━━━━━━━━━\nTotal: $${total}`;
    
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

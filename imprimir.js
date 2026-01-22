/* ========================================
   FUNCIÓN PARA GENERAR PDF DEL CARRITO
   ======================================== */

function generarPDFCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. No se puede generar PDF.");
        return;
    }

    // Crear contenido HTML para el PDF
    let contenidoHTML = `
        <style>
            body { font-family: Arial, sans-serif; }
            .encabezado { text-align: center; margin-bottom: 20px; }
            .encabezado h1 { color: #2C3E50; margin: 0; }
            .logo-titulo { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .logo-titulo img { width: 50px; height: 50px; }
            .encabezado p { color: #666; margin: 5px 0; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th { background-color: #2C3E50; color: white; padding: 10px; text-align: left; }
            td { padding: 10px; border-bottom: 1px solid #ddd; }
            tr:nth-child(even) { background-color: #f9f9f9; }
            .total-section { text-align: right; margin-top: 20px; }
            .total { font-size: 18px; font-weight: bold; color: #1abc9c; }
            .linea { border-top: 2px solid #2C3E50; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
        </style>

        <div class="encabezado">
            <div class="logo-titulo">
                <img src="img/Pagina/Favicon.png" alt="">
                <h1>MatiVale - Carrito de Compras</h1>
            </div>
            <p>Fecha: ${new Date().toLocaleDateString('es-UY')}</p>
            <p>Hora: ${new Date().toLocaleTimeString('es-UY')}</p>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Código</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Agregar productos a la tabla
    let total = 0;
    carrito.forEach((producto) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        contenidoHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.codigo}</td>
                <td>$${producto.precio}</td>
                <td>${producto.cantidad}</td>
                <td>$${subtotal}</td>
            </tr>
        `;
    });

    contenidoHTML += `
            </tbody>
        </table>

        <div class="linea"></div>

        <div class="total-section">
            <div class="total">TOTAL: $${total}  </div>
        </div>

        <div class="linea"></div>

        <div class="footer">
            <p>
                <strong>Contacto:</strong> 
                <a href="https://wa.me/59892882637" target="_blank">
                    WhatsApp: +598 92882637
                </a> 
                | 
                <a href="https://www.facebook.com/mirtha.pacilio" target="_blank">
                    Facebook: mirtha.pacilio
                </a>
            </p>
            <p>Ubicación: Mercedes, Soriano - Sábados en Plaza Rivera | Domingos en Plaza Lavalleja</p>
            <p style="margin-top: 20px; font-style: italic;">
                <strong>Documento generado automáticamente por MatiVale.store</strong>
                <a href="https://matiVale.store" target="_blank">www.matiVale.store</a>
            </p>
        </div>
    `;

    // Configuración del PDF
    const opciones = {
        margin: 10,
        filename: `MatiVale_Carrito_${new Date().getTime()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };

    // Crear elemento temporal con el contenido
    const elemento = document.createElement('div');
    elemento.innerHTML = contenidoHTML;

    // Generar PDF
    html2pdf().set(opciones).from(elemento).save();
    
    console.log("✓ PDF generado exitosamente");
}

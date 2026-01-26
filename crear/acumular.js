document.addEventListener("DOMContentLoaded", function() {

    const btnAcumular = document.getElementById("acumularProducto");
    const tabla = document.getElementById("tablaProductosAcumulados");

    window.productosAcumulados = [];

    btnAcumular.addEventListener("click", function() {

        if (!window.productoActual) {
            alert("Primero debes crear un producto.");
            return;
        }

        const producto = window.productoActual;

        window.productosAcumulados.push(producto);

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td>${producto.codigo}</td>
            <td>${Array.isArray(producto.categoria) 
                ? producto.categoria.join(", ") 
                : producto.categoria}</td>
            <td>${producto.imagenes 
                ? producto.imagenes.length + " imágenes"
                : producto.imagen}</td>
        `;

        tabla.appendChild(fila);

        alert("Producto acumulado ✅");
    });

});

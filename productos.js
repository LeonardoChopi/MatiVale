const productos = [
    {
        nombre: "Botella 1L jabón para burbujeros",
        categoria: "Juguete",
        descripcion: "Botella de 1 litro de jabón especial para hacer burbujas. Ideal para fiestas y eventos al aire libre.",
        precio: "170",
        codigo: "2025021300548",
        imagen: "https://office2000.com.uy/cache/office%202000/productos/2/100671-550x550.jpg"
    },
    {
        nombre: "Camión amarillo plástico caja",
        categoria: "Juguete",
        descripcion: "Camión de juguete amarillo con caja de plástico. Perfecto para que los niños jueguen y desarrollen su imaginación.",
        precio: "370",
        codigo: "2024080700047",
        imagen: "https://office2000.com.uy/cache/office%202000/productos/1/99484_02-550x550.webp"
    },
    {
        nombre: "Minicompresor 12v",
        categoria: "Herramienta",
        descripcion: "Minicompresor portátil de 12V, ideal para inflar neumáticos de autos, bicicletas y otros inflables. Compacto y fácil de usar.",
        precio: "990",
        codigo: "7737440348944",
        imagen: "https://www.multishop.com.uy/cdn/shop/files/mini-compresor-de-aire-12v-10a-reforzado-portatil-y-potente-multishop-uruguay-2.jpg?v=1761559511&width=1200"
    },
    {
        nombre: "Trompeta",
        categoria: "Juguete",
        descripcion: "Trompeta de juguete de colores vibrantes. Perfecta para que los niños exploren su creatividad musical.",
        precio: "390",
        codigo: "2025062000568",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713831-MLU96172664951_102025-O.webp"
    },
    {
        nombre: "Tira tazo de Goma Eva",
        categoria: "Juguete",
        descripcion: "Tira de tazos hechos de Goma Eva, ideales para juegos y actividades creativas. Vienen en varios colores y diseños divertidos.",
        precio: "100",
        codigo: "6974891400444",
        imagen: "https://i5.walmartimages.com/asr/52d2cda1-47eb-40a9-89af-679083925510.996e31b4c467ed499c9567392e53b70a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {
        nombre: "Set pinturas mariposa",
        categoria: "Juguete",
        descripcion: "Set de pinturas con temática de mariposas. Incluye varios colores y pinceles para que los niños puedan crear hermosas obras de arte.",
        precio: "290",
        codigo: "2025070801492",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_964742-MLU96632969267_102025-O.webp"
    },
    {
        nombre: "Set caballos/unicornios en tarro",
        categoria: "Juguete",
        descripcion: "Set de figuras de caballos y unicornios en un tarro transparente. Perfecto para coleccionar o jugar.",
        precio: "200",
        codigo: "2024080100366",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_976777-MLU81217814203_122024-O.webp"
    },
    {
        nombre: "Popit con pilas",
        categoria: "Juguete",
        descripcion: "Popit sensorial con luces y sonidos, funciona con pilas. Ideal para aliviar el estrés y mejorar la concentración.",
        precio: "290",
        codigo: "2025030700087",
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_671375-MLU87784402265_072025-O.webp",
            "https://bizweb.dktcdn.net/100/567/082/products/hp17.png?v=1746850889660"
        ]
    },
    {
        nombre: "Números con imán",
        categoria: "Juguete",
        descripcion: "Números del 0 al 9 con imán en la parte posterior. Perfectos para aprender a contar y realizar actividades educativas en superficies metálicas.",
        precio: "100",
        codigo: "2024080100199",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_797070-MLU88870931064_082025-O.webp"
    },

    /* ---- PESCA ---- */

    {
        nombre: "Caja pesca",
        categoria: "Pesca",
        descripcion: "Caja pesca ideal para actividades de pesca. Producto práctico y resistente para organizar y transportar accesorios.",
        precio: "230",
        codigo: "",
        imagen: "https://f.fcdn.app/imgs/10c9ba/www.casagarrido.com.uy/garruy/51ea/original/catalogo/12121706_1/2000-2000/caja-con-11-divisiones-g-28x17-5x4-cm-caja-con-11-divisiones-g-28x17-5x4-cm.jpg"
    },
    {
        nombre: "Lingas x 10Unid",
        categoria: "Pesca",
        descripcion: "Lingas pensadas para uso en pesca, útiles y duraderas para diferentes tipos de montaje.",
        precio: "100",
        codigo: "2025051317806",
        imagen: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3409d083e36547e80d9469b6f2f46579.jpg"
    },
    {
        nombre: "Lingas x 60Unid",
        categoria: "Pesca",
        descripcion: "Lingas pensadas para uso en pesca, útiles y duraderas para diferentes tipos de montaje.",
        precio: "360",
        codigo: "2025051317806",
        imagen: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3409d083e36547e80d9469b6f2f46579.jpg"
    },
    {
        nombre: "Linterna farol recargable solar",
        categoria: "Pesca",
        descripcion: "Linterna farol recargable solar, ideal para pesca y uso al aire libre.",
        precio: "380",
        codigo: "SH-5800T",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzam43926dyNg3Cijq62pzPPr80XB6OIUDyxdQGABYAy-yionF5lkbaw9bZzc6nsy5Q4A&usqp=CAU"
    },
    {
        nombre: "Haojia Plus 4000",
        categoria: "Pesca",
        descripcion: "Haojia Plus 4000, ideal para pescadores que requieren un equipo de alto rendimiento.",
        precio: "0",
        codigo: "MR-61",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_667499-MLU73331039394_122023-O.webp"
    }

];
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
    {
        nombre: "Cuerda de saltar",
        categoria: "Juguete",
        descripcion: "Cuerda de saltar ajustable, ideal para ejercicio y juegos al aire libre. Hecha de materiales duraderos para un uso prolongado.",
        precio: "190",
        codigo: "2025062000810",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_802383-MLU95707377717_102025-O.webp"
    },
    {
        nombre: "Cuerda de saltar",
        categoria: "Juguete",
        descripcion: "Cuerda de saltar ajustable, ideal para ejercicio y juegos al aire libre. Hecha de materiales duraderos para un uso prolongado.",
        precio: "100",
        codigo: "2021121400119",
        imagen: "https://office2000.com.uy/image/cache/catalog/office%202000/productos/1/93831-1200x1200.jpg"
    },
    {
        nombre: "Bley bley",
        categoria: "Juguete",
        descripcion: "Bley bley clásico de plástico, ideal para juegos y competencias. Fácil de usar y transportar.",
        precio: "200",
        codigo: "2025062000407",
        imagen: "https://http2.mlstatic.com/D_Q_NP_753091-MLU71396304763_082023-O.webp"
    },
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
    nombre: "Linterna con picana",
    categoria: "Pesca",
    descripcion: "Linterna con picana práctica para actividades al aire libre y pesca nocturna.",
    precio: "490",
    codigo: "1101",
    imagen: "https://f.fcdn.app/imgs/46f858/www.bentancoroutdoor.com.uy/bentuy/0722/original/catalogo/FB098_FB098_2/2000-2000/linterna-picana-electrica-linterna-picana-electrica.jpg"
},
{
    nombre: "Linterna farol",
    categoria: "Pesca",
    descripcion: "Linterna farol ideal para iluminar zonas de pesca o campamento.",
    precio: "350",
    codigo: "2835",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_659195-MLC83334080407_032025-O.webp"
},
{
    nombre: "Linterna farol con pie",
    categoria: "Pesca",
    descripcion: "Linterna farol con pie estable, perfecta para usar en exteriores.",
    precio: "560",
    codigo: "6974758868417",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_785493-MLA97741980681_112025-O.webp"
},
{
    nombre: "Linterna farol pie",
    categoria: "Pesca",
    descripcion: "Linterna farol pie resistente y funcional para actividades nocturnas.",
    precio: "395",
    codigo: "1256558886071",
    imagen: "https://comprasalmayor.com.co/wp-content/uploads/2025/04/1749482811_LAMPARA-SOOYA-1.jpg"
},
{
    nombre: "Linterna farol recargable solar",
    categoria: "Pesca",
    descripcion: "Linterna farol recargable solar, ideal para pesca y uso al aire libre.",
    precio: "380",
    codigo: "SH-5800T",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzam43926dyNg3Cijq62pzPPr80XB6OIUDyxdQGABYAy-yionF5lkbaw9bZzc6nsy5Q4A&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzam43926dyNg3Cijq62pzPPr80XB6OIUDyxdQGABYAy-yionF5lkbaw9bZzc6nsy5Q4A&usqp=CAU"
},
{
    nombre: "Set boyas",
    categoria: "Pesca",
    descripcion: "Set boyas práctico para distintas modalidades de pesca.",
    precio: "160",
    codigo: "15PCS",
    imagen: "https://s.alicdn.com/@sc04/kf/Hda7433ccbdd24af785da2ce9267af832A/15pcs-set-Wholesale-Fishing-Bobbers-Floats-Foam-Set-Nice-Packing-Float-Tube-Fishing-Rig-Tackle-for-Carp-Catfish.jpg"
},
{
    nombre: "Tanza 0.3",
    categoria: "Pesca",
    descripcion: "Tanza resistente para pesca, adecuada para diferentes tipos de carnada.",
    precio: "100",
    codigo: "",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_630382-MLU94707515594_102025-O.webp"
},
{
    nombre: "Tanza 0,6",
    categoria: "Pesca",
    descripcion: "Tanza de pesca versátil y confiable.",
    precio: "100",
    codigo: "6935090600028",
    imagen: "https://delsurimportaciones.com.uy/wp-content/uploads/2025/01/WhatsApp-Image-2025-08-12-at-09.59.54-600x600.jpeg"
},
{
    nombre: "Tanza 0,6",
    categoria: "Pesca",
    descripcion: "Tanza para pesca de buena calidad y rendimiento.",
    precio: "150",
    codigo: "]C1MR-506",
    imagen: "https://mastertools.com.uy/wp-content/uploads/2025/09/MR-5-06-Photoroom.jpg"
},
{
    nombre: "Tanza multifilamento 0,25",
    categoria: "Pesca",
    descripcion: "Tanza multifilamento resistente y de alto desempeño para pesca.",
    precio: "200",
    codigo: "",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_839633-MLU98377660099_112025-O.webp"
},
{
    nombre: "Caña Pesca LINGA 2 Tramos 1.5m",
    categoria: "Pesca",
    descripcion: "Caña de pesca LINGA de 2 tramos y 1.5 metros de longitud, ideal para principiantes y pescadores ocasionales.",
    precio: "500",
    codigo: "7293",
    imagen: "https://delsurimportaciones.com.uy/wp-content/uploads/2025/03/Photoroom-20250306_154316-1152x1536-1.png"
},
{
    nombre: "Reel RED SL 500",
    categoria: "Pesca",
    descripcion: "Reel RED SL 500, compacto y eficiente para una experiencia de pesca satisfactoria.",
    precio: "780",
    codigo: "SL500",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_742813-MLU82425336491_022025-O.webp"
},
{
    nombre: "Haojia Plus 4000",
    categoria: "Pesca",
    descripcion: "Haojia Plus 4000, ideal para pescadores que requieren un equipo de alto rendimiento.",
    precio: "650",
    codigo: "MR-61",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_667499-MLU73331039394_122023-O.webp"
},
{
    nombre: "Reel de Pesca Eco Plástico",
    categoria: "Pesca",
    descripcion: "Reel de pesca Eco Plástico, una opción económica y funcional para pescadores principiantes.",
    precio: "380",
    codigo: "200",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_627133-MLU74219932553_012024-O.webp"
},
{
    nombre: "Reel Ocean Pro",
    categoria: "Pesca",
    descripcion: "Reel Ocean Pro, diseñado para ofrecer un rendimiento superior en diversas condiciones de pesca.",
    precio: "690",
    codigo: "3000",
    imagen: "https://img.kwcdn.com/product/fancy/5b329044-d783-4e41-9f2c-51e0279cfdfc.jpg?imageMogr2/auto-orient|imageView2/2/w/800/q/70/format/webp"
},
{
    nombre: "Reel Rotativo",
    categoria: "Pesca",
    descripcion: "Reel rotativo, ideal para pescadores que buscan versatilidad y facilidad de uso en su equipo.",
    precio: "950",
    codigo: "",
    imagen: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/0a92d0329f01205c579ff5feacc7273d.jpg?imageMogr2/auto-orient|imageView2/2/w/800/q/70/format/webp"
},
{
    nombre: "Caña Pesca Telescópica C/Reel y Accesorios en Blister",
    categoria: "Pesca",
    descripcion: "Caña de pesca telescópica con reel y accesorios incluidos, perfecta para pescadores de todos los niveles.",
    precio: "690",
    codigo: "DHSet",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_963755-MLU76568512594_062024-O.webp"
},
{
    nombre: "Posa Caña Soporte (45cm)",
    categoria: "Pesca",
    descripcion: "Posa caña soporte de 45cm, ideal para mantener la caña estable durante la pesca.",
    precio: "150",
    codigo: "7403",
    imagen: "https://i5.walmartimages.com/asr/2dffa610-d866-4b23-843f-1753caf241e3.1ad944824d740c713050f4abbf6fecde.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
},

{
    nombre: "Luz Punta Caña de Pesca",
    categoria: "Pesca",
    descripcion: "Luz para la punta de la caña de pesca, ideal para actividades nocturnas.",
    precio: "50",
    codigo: "7410",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_644714-MLU99130810295_112025-O.webp"
},
{
    nombre: "Tijera Alicate Pesca",
    categoria: "Pesca",
    descripcion: "Tijera alicate diseñada para facilitar las tareas de pesca.",
    precio: "200",
    codigo: "7477",
    imagen: "https://www.campingshop.com.uy/wp-content/uploads/sites/115/2021/03/eeekit2-1.jpg"
},
{
    nombre: "REEL ROTATIVO CON DEVANADOR 4000 METAL",
    categoria: "Pesca",
    descripcion: "Reel rotativo con devanador 4000 de metal, ideal para pescadores que buscan durabilidad y rendimiento.",
    precio: "2900",
    codigo: "MR-69",
    imagen: "https://mastertools.com.uy/wp-content/uploads/2025/12/MR-69-Photoroom-1.jpg"
},
{
    nombre: "REEL ROTATIVO CON DEVANADOR 3000 PLÁSTICO",
    categoria: "Pesca",
    descripcion: "Reel rotativo con devanador 3000 de plástico, una opción económica para pescadores principiantes.",
    precio: "2400",
    codigo: "MR-68",
    imagen: "https://mastertools.com.uy/wp-content/uploads/2025/12/MR-67-Photoroom.jpg"
}
];

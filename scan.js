/* ========================================
   CONFIGURACIÓN DEL SCANNER DE CÓDIGOS
   ======================================== */

const scanBtn = document.getElementById("scanBtn");
const scanner = document.getElementById("scanner");
let isScanning = false;

/* ========================================
   CONTROL PRINCIPAL DEL BOTÓN ESCANEAR
   ======================================== */

if (scanBtn) {
    scanBtn.addEventListener("click", async (e) => {
        e.preventDefault();

        // Si ya está escaneando, detener
        if (isScanning) {
            stopScanning();
            return;
        }

        // Iniciar escaneo
        isScanning = true;
        scanBtn.textContent = "⏹ Detener";
        scanner.style.display = "block";

        try {
            // Solicitar acceso a la cámara trasera del dispositivo
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "environment" },
                audio: false
            });

            // Crear elemento de video para mostrar la cámara
            const video = document.createElement("video");
            video.srcObject = stream;
            video.setAttribute("autoplay", true);
            video.setAttribute("playsinline", true);
            video.style.width = "100%";
            video.style.height = "100%";
            video.style.objectFit = "cover";

            // Insertar video en el contenedor del scanner
            scanner.innerHTML = "";
            scanner.appendChild(video);

            // Cuando el video esté listo, inicializar Quagga
            video.onloadedmetadata = () => {
                video.play();
                initializeQuagga(video, stream);
            };

        } catch (err) {
            console.error("Error al acceder a la cámara:", err);
            alert("No se pudo acceder a la cámara. Verifica los permisos.");
            scanner.style.display = "none";
            isScanning = false;
            scanBtn.textContent = "🔍 Escanear";
        }
    });

    /* ========================================
       INICIALIZACIÓN DE QUAGGA (Librería de escaneo)
       ======================================== */

    function initializeQuagga(video, stream) {
        Quagga.init({
            // Configurar stream de video
            inputStream: {
                type: "LiveStream",
                target: scanner,
                constraints: {
                    facingMode: "environment",
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            },
            // Tipos de códigos que se pueden detectar
            decoder: {
                readers: [
                    "code_128_reader",
                    "ean_reader",
                    "ean_8_reader",
                    "upc_reader",
                    "upc_e_reader",
                    "codabar_reader"
                ]
            },
            locate: true,
            frequency: 10
        }, function (err) {
            if (err) {
                console.error("Error Quagga:", err);
                stopScanning();
                return;
            }
            // Iniciar la detección
            Quagga.start();
        });

        /* ========================================
           DETECCIÓN DE CÓDIGO DE BARRAS
           ======================================== */

        // Se ejecuta cuando detecta un código válido
        Quagga.onDetected((result) => {
            if (result.codeResult && result.codeResult.code) {
                const code = result.codeResult.code;
                // Insertar el código en el input del buscador
                inputBuscador.value = code;
                // Disparar evento input para que se filtre automáticamente
                inputBuscador.dispatchEvent(new Event("input"));
                // Detener el scanner
                stopScanning();
            }
        });
    }

    /* ========================================
       FUNCIÓN PARA DETENER EL ESCANER
       ======================================== */
       
    function stopScanning() {
        // Parar Quagga
        if (Quagga && Quagga.initialized) {
            Quagga.stop();
        }
        // Limpiar interfaz
        scanner.style.display = "none";
        scanner.innerHTML = "";
        isScanning = false;
        scanBtn.textContent = "🔍 Escanear";
    }
}

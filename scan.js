/* ========================================
   CONFIGURACIÓN DEL SCANNER DE CÓDIGOS
   ======================================== */

const scanBtn = document.getElementById("scanBtn");
const scanner = document.getElementById("scanner");
let isScanning = false;
let quaggaInitialized = false;

/* ========================================
   CONTROL PRINCIPAL DEL BOTÓN ESCANEAR
   ======================================== */

if (scanBtn) {
    scanBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Si ya está escaneando, detener
        if (isScanning) {
            stopScanning();
            return;
        }

        // Iniciar escaneo
        startScanning();
    });
}

function startScanning() {
    isScanning = true;
    scanBtn.textContent = "⏹ Detener";
    scanner.style.display = "block";
    scanner.innerHTML = "";

    // Inicializar Quagga directamente
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: scanner,
            constraints: {
                facingMode: "environment",
                width: { min: 640, ideal: 1280, max: 1920 },
                height: { min: 480, ideal: 720, max: 1080 }
            }
        },
        locator: {
            patchSize: "medium",
            halfSample: true
        },
        numOfWorkers: 2,
        decoder: {
            workers: {
                external: null,
                number: 1
            },
            readers: [
                "code_128_reader",
                "ean_reader",
                "ean_8_reader",
                "upc_reader",
                "upc_e_reader",
                "codabar_reader"
            ],
            debug: {
                showCanvas: false,
                showPatterns: false,
                showFrequency: false,
                showErrors: false
            }
        }
    }, function (err) {
        if (err) {
            console.error("Error al inicializar Quagga:", err);
            alert("Error al acceder a la cámara. Por favor, verifica los permisos.");
            stopScanning();
            return;
        }

        console.log("✓ Quagga inicializado correctamente");
        quaggaInitialized = true;
        Quagga.start();

        // Configurar detección de códigos
        Quagga.onDetected(onCodeDetected);
    });
}

/* ========================================
   DETECCIÓN DE CÓDIGO DE BARRAS
   ======================================== */

let lastDetectedCode = null;
let detectionTimeout = null;

function onCodeDetected(result) {
    if (result && result.codeResult && result.codeResult.code) {
        const code = result.codeResult.code;
        
        // Evitar detectar el mismo código múltiples veces
        if (lastDetectedCode === code) {
            return;
        }
        
        lastDetectedCode = code;
        
        console.log("✓ Código detectado:", code);
        
        // Insertar el código en el input del buscador
        const inputBuscador = document.getElementById("inputBuscador");
        if (inputBuscador) {
            inputBuscador.value = code;
            // Disparar evento input para que se filtre automáticamente
            inputBuscador.dispatchEvent(new Event("input"));
        }
        
        // Detener el scanner después de detectar
        stopScanning();
    }
}

/* ========================================
   FUNCIÓN PARA DETENER EL SCANNER
   ======================================== */

function stopScanning() {
    isScanning = false;
    scanBtn.textContent = "📱 Escanear";
    
    // Detener Quagga
    if (Quagga && typeof Quagga.stop === 'function') {
        Quagga.stop();
        Quagga.offDetected(onCodeDetected);
    }
    
    quaggaInitialized = false;
    lastDetectedCode = null;
    
    // Limpiar contenedor después de un breve delay
    setTimeout(() => {
        scanner.style.display = "none";
        scanner.innerHTML = "";
    }, 300);
}

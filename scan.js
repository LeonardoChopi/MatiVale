const scanBtn = document.getElementById("scanBtn");
const inputBuscador = document.getElementById("inputBuscador");
const scanner = document.getElementById("scanner");
let isScanning = false;

if (scanBtn) {
    scanBtn.addEventListener("click", async (e) => {
        e.preventDefault();

        if (isScanning) {
            stopScanning();
            return;
        }

        isScanning = true;
        scanBtn.textContent = "⏹ Detener";
        scanner.style.display = "block";

        try {
            // Solicitar acceso a la cámara
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "environment" },
                audio: false
            });

            const video = document.createElement("video");
            video.srcObject = stream;
            video.setAttribute("autoplay", true);
            video.setAttribute("playsinline", true);
            video.style.width = "100%";
            video.style.height = "100%";
            video.style.objectFit = "cover";

            scanner.innerHTML = "";
            scanner.appendChild(video);

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

    function initializeQuagga(video, stream) {
        Quagga.init({
            inputStream: {
                type: "LiveStream",
                target: scanner,
                constraints: {
                    facingMode: "environment",
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            },
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
            Quagga.start();
        });

        Quagga.onDetected((result) => {
            if (result.codeResult && result.codeResult.code) {
                const code = result.codeResult.code;
                inputBuscador.value = code;
                inputBuscador.dispatchEvent(new Event("input"));
                stopScanning();
            }
        });
    }

    function stopScanning() {
        if (Quagga && Quagga.initialized) {
            Quagga.stop();
        }
        scanner.style.display = "none";
        scanner.innerHTML = "";
        isScanning = false;
        scanBtn.textContent = "🔍 Escanear";
    }
}

let html5QrCode;
let scanning = false;

const resultText = document.getElementById("result-text");
const openLinkButton = document.getElementById("open-link");

document.getElementById("start-btn").onclick = () => startScanner();
document.getElementById("stop-btn").onclick = () => stopScanner();

function startScanner() {
    if (scanning) return;

    html5QrCode = new Html5Qrcode("reader");

    html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        qrCodeMessage => {
            resultText.innerText = qrCodeMessage;
            openLinkButton.href = qrCodeMessage;
            openLinkButton.classList.remove("hidden");
        }
    ).then(() => {
        scanning = true;
        document.getElementById("start-btn").classList.add("hidden");
        document.getElementById("stop-btn").classList.remove("hidden");
    });
}

function stopScanner() {
    if (!scanning) return;

    html5QrCode.stop().then(() => {
        scanning = false;
        document.getElementById("start-btn").classList.remove("hidden");
        document.getElementById("stop-btn").classList.add("hidden");
    });
}

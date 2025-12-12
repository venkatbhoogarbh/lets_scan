function onScanSuccess(decodedText, decodedResult) {
    document.getElementById("result").innerText = decodedText;
}

const html5QrCodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: 250 }
);
html5QrCodeScanner.render(onScanSuccess);

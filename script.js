function onScanSuccess(decodedText, decodedResult) {
    console.log(Code scanned = ${decodedText});
    document.getElementById("result").innerText = decodedText;
}

function onScanFailure(error) {
    // ignore errors (happens when scanning)
}

let scanner = new Html5QrcodeScanner(
    "reader",
    {
        fps: 10,
        qrbox: 250
    });

scanner.render(onScanSuccess, onScanFailure);

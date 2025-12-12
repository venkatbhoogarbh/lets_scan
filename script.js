function onScanSuccess(decodedText, decodedResult) {
    const resultBox = document.getElementById("result");
    const openBtn = document.getElementById("open-btn");

    resultBox.innerText = decodedText;

    // Check if scanned text is a URL
    if (decodedText.startsWith("http://") || decodedText.startsWith("https://")) {
        openBtn.style.display = "block";     // show button
        openBtn.onclick = () => {
            window.open(decodedText, "_blank");
        };
    } else {
        openBtn.style.display = "none";      // hide button if not URL
    }

    // Scroll to result smoothly
    document.getElementById("result-box").scrollIntoView({ behavior: "smooth" });
}

// Scanner setup
const scanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250
});
scanner.render(onScanSuccess);

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const tableContainer = document.getElementById("tableContainer");
  const tableBody = document.getElementById("tableBody");
  const resultButton = document.getElementById("resultButton");
  const resultText = document.getElementById("resultText");
  const body = document.getElementById("body");
  const threshold = 50;

  startButton.addEventListener("click", function () {
    body.style.backgroundRepeat = "repeat";
    tableContainer.classList.remove("hidden");
    resultButton.classList.remove("hidden");
    startButton.style.display = "none";
  });

  resultButton.addEventListener("click", function () {
    resultButton.classList.add("hidden");
    let totalScore = 0;
    const radios = document.querySelectorAll(".evet-hayir input[type='radio']:checked");

    for (const radio of radios) {
      const katsayi = parseInt(radio.getAttribute("data-katsayi"));
      totalScore += katsayi;
    }

    const resultMessage = totalScore > threshold ? "uygun :)" : "uygun değil :(";
    resultText.textContent = `Toplam puan: ${totalScore}. Bizce bu yurt senin için ${resultMessage}`;
    resultText.classList.remove("hidden");
    tableContainer.classList.add("hidden");
  });
});
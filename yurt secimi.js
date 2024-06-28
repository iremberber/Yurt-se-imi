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
    const questionCount = 17;

   const coefficients = [6, 4, 8, 10, 3, 12, 6, 4, 6, 6, 6, 4, 10, 5, 2, 3, 5];

     for (let i = 1; i <= questionCount; i++) {
        const selectedValue = document.querySelector('input[name="answer_' + i + '"]:checked');
        if (selectedValue) {
          const value = selectedValue.value;
          if (value === "evet") {
            totalScore += coefficients[i - 1];
          }
        }
      }

    const resultMessage = totalScore > threshold ? "uygun :)" : "uygun değil :(";
    resultText.textContent = `Toplam puan: ${totalScore}. Bizce bu yurt senin için ${resultMessage}`;
    resultText.classList.remove("hidden");
    tableContainer.classList.add("hidden");
  });
});


   
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const tableContainer = document.getElementById("tableContainer");
    const tableBody = document.getElementById("tableBody");
    const resultButton = document.getElementById("resultButton");
    const resultText = document.getElementById("resultText");
  
    startButton.addEventListener("click", function () {
      tableContainer.classList.remove("hidden");
      resultButton.classList.remove("hidden");
      startButton.style.display = "none";
    });
  
    resultButton.addEventListener("click", function () {
      let yesCount = 0;
      const rows = tableBody.getElementsByTagName("tr");
      for (const row of rows) {
        const radioYes = row.querySelector('input[value="evet"]');
        if (radioYes.checked) {
          yesCount++;
        }
      }
      const resultMessage = yesCount > rows.length / 2 ? "uygun :)" : "uygun değil :(";
      resultText.textContent = `Toplam ${yesCount} soruya evet dedin. Bizce bu yurt senin için ${resultMessage}`;
      resultText.classList.remove("hidden");
      tableContainer.classList.add("hidden");
    
    });
  });
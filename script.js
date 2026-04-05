document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Dynamically collect all form inputs
    const formData = {};
    const inputs = this.querySelectorAll('input');
    inputs.forEach(input => {
        formData[input.name] = input.value;
    });

    fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        const resultBox = document.getElementById('resultBox');
        const predictionText = document.getElementById('predictionText');
        
        resultBox.classList.remove('hidden');
        
        if(data.error) {
            predictionText.innerText = "Error: " + data.error;
            predictionText.style.color = "orange";
        } else {
            predictionText.innerText = data.prediction;
            predictionText.style.color = data.prediction.includes("High") ? "#e74c3c" : "#2ecc71";
        }
    });
});
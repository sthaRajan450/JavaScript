const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please enter a valid height in cm.";
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please enter a valid weight in kg.";
  } else {
    
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi} - Underweight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi} - Normal Weight</span>`;
    } else {
      results.innerHTML = `<span>${bmi} - Overweight</span>`;
    }
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(e.target.height.value);
  const weight = parseInt(e.target.weight.value);
  const result = document.querySelector(".results");
  let bmi = 0;

  if (height === "" || height < 0 || isNaN(height)) {
    return (result.innerHTML = "Please give a valid height");
  }
  if (weight === "" || weight < 0 || isNaN(weight)) {
    return (result.innerHTML = "Please give a valid weight");
  }

  bmi = (weight / ((height * height) / 10000)).toFixed(2);
  result.innerHTML = `<span>${bmi}</span>`;
  if (bmi < 18.5) {
    const span = document.createElement("span");
    span.innerHTML = "Underweight";
    return result.appendChild(span);
  }
  if (bmi > 18.5 && bmi <= 24.9) {
    const span = document.createElement("span");
    span.innerHTML = "Healthy weight";
    return result.appendChild(span);
  }
  if (bmi >= 25.0 && bmi <= 29.9) {
    const span = document.createElement("span");
    span.innerHTML = "Overweight";
    return result.appendChild(span);
  }
  if (bmi > 30.0) {
    const span = document.createElement("span");
    span.innerHTML = "Obesity";
    return result.appendChild(span);
  }
});

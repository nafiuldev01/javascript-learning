const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const target = e.target;
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
  if (height && weight) {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const text = document.createTextNode(`Here is your reslut: ${bmi}`);
    result.appendChild(text);
  }
});

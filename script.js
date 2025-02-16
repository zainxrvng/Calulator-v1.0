let calculation = localStorage.getItem("calculation") || "";

function updateCalculation(value) {
  calculation += value;
  document.querySelector(".js-message").innerHTML = calculation;
  try {
    document.querySelector(".js-message2").innerHTML = `= ${eval(calculation) || ""}`;
  } catch {
    document.querySelector(".js-message2").innerHTML = "Error";
  }

  localStorage.setItem("calculation", calculation);
}

// Optional: you can also create a function in order
// to reuse this code.

function clearCalculation() {
  calculation = "";
  document.querySelector(".js-message").innerHTML = "0";
  document.querySelector(".js-message2").innerHTML = "";
  localStorage.setItem("calculation", calculation);
}
function calulateResult() {
  try {
    calculation = eval(calculation) || "0";
    document.querySelector(".js-message").innerHTML = calculation;
    document.querySelector(".js-message2").innerHTML = "";
    localStorage.setItem("calculation", calculation);
  } catch {
    document.querySelector(".js-message").innerHTML = "Error";
    calculation = "";
  }
}

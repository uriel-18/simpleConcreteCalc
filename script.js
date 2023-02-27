let input = document.getElementById("input");

function appendToInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = "";
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = "Error";
  }
}
function convertToFeet() {
  const input = document.getElementById("input").value;
  const feet = Math.floor(input);
  const inches = Math.round((input - feet) * 12);
  document.getElementById("input").value = feet + "' " + inches + "\"";
}

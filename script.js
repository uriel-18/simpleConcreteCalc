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

function verificar() {
  let response = document.querySelector(".resposta");
  let escalaInicial = document.querySelector("#primEsc");
  let escalaTransform = document.querySelector("#secEsc");
  let valorInicial = document.querySelector("#valor");
  let valor = Number(valorInicial.value);
  let valorFinal = "";
  const valorEscInicial =
    escalaInicial.options[escalaInicial.selectedIndex].value;
  const valorEscTransform =
    escalaTransform.options[escalaTransform.selectedIndex].value;

  peneiraMesmasEscalas =
    valorEscInicial == valorEscTransform
      ? ((response.innerHTML = `A temperatura já está em <strong>${valorEscInicial}</strong>, tente transformar em outra.`),
        (response.style.color = "red"))
      : conversao();

  function conversao() {
    if (valorEscInicial == "Celsius") {
      if (valorEscTransform == "Fahrenheit") {
        valorFinal = (valor * 9) / 5 + 32;
      }
      if (valorEscTransform == "Kelvin") {
        valorFinal = valor + 273.15;
      }
    }
    if (valorEscInicial == "Fahrenheit") {
      if (valorEscTransform == "Celsius") {
        valorFinal = ((valor - 32) * 5) / 9;
      }
      if (valorEscTransform == "Kelvin") {
        valorFinal = ((valor - 32) * 5) / 9 + 273.15;
      }
    }
    if (valorEscInicial == "Kelvin") {
      if (valorEscTransform == "Celsius") {
        valorFinal = valor - 273.15;
      }
      if (valorEscTransform == "Fahrenheit") {
        valorFinal = ((valor - 273.15) * 9) / 5 + 32;
      }
    }
    return (response.innerHTML = valorFinal), (response.style.color = "");
  }
}

export function calculate() {
  const buton = document.getElementById("calculateButon");

  buton.addEventListener("click", verificar);
}

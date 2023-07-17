var temaEscuro = document.querySelector("input#escuro");
var temaClaro = document.querySelector("input#claro");
temaEscuro.addEventListener("click", () => {
  document.body.classList.add("darkModeAtivado");
});

temaClaro.addEventListener("click", () => {
  document.body.classList.remove("darkModeAtivado");
});

function verificar() {
  var resposta = document.querySelector(".resposta");
  let escalaInicial = document.querySelector("#primEsc");
  let escalaTransform = document.querySelector("#secEsc");
  var valorInicial = document.querySelector("#valor");
  var valor = Number(valorInicial.value);
  var valorEscInicial =
    escalaInicial.options[escalaInicial.selectedIndex].value;
  var valorEscTransform =
    escalaTransform.options[escalaTransform.selectedIndex].value;
  let valorFinal = "";
  if (valorEscInicial == "Celsius") {
    if (valorEscTransform == "Celsius") {
      resposta.innerHTML = `A temperatura já está em <strong>${valorEscInicial}</strong>, tente transformar em outra.`;
    } else if (valorEscTransform == "Fahrenheit") {
      valorFinal = (valor * 9) / 5 + 32;
      resposta.innerHTML = valorFinal;
    } else if (valorEscTransform == "Kelvin") {
      valorFinal = valor + 273.15;
      resposta.innerHTML = valorFinal;
    }
  } else if (valorEscInicial == "Fahrenheit") {
    if (valorEscTransform == "Celsius") {
      valorFinal = ((valor - 32) * 5) / 9;
      resposta.innerHTML = valorFinal;
    } else if (valorEscTransform == "Fahrenheit") {
      resposta.innerHTML = `A temperatura já está em <strong>${valorEscInicial}</strong>, tente transformar em outra.`;
    } else if (valorEscTransform == "Kelvin") {
      valorFinal = ((valor - 32) * 5) / 9 + 273.15;
      resposta.innerHTML = valorFinal;
    }
  } else if (valorEscInicial == "Kelvin") {
    if (valorEscTransform == "Celsius") {
      valorFinal = valor - 273.15;
      resposta.innerHTML = valorFinal;
    } else if (valorEscTransform == "Fahrenheit") {
      valorFinal = ((valor - 273.15) * 9) / 5 + 32;
      resposta.innerHTML = valorFinal;
    } else if (valorEscTransform == "Kelvin") {
      resposta.innerHTML = `A temperatura já está em <strong>${valorEscInicial}</strong>, tente transformar em outra.`;
    }
  }
}

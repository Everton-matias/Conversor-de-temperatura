const temaEscuro = document.querySelector("input#escuro");
const temaClaro = document.querySelector("input#claro");
temaEscuro.addEventListener("click", () => {
  document.body.classList.add("darkModeAtivado");
});
temaClaro.addEventListener("click", () => {
  document.body.classList.remove("darkModeAtivado");
});

function verificar() {
  let resposta, escalaInicial, escalaTransform, valorInicial, valorFinal;
  resposta = document.querySelector(".resposta");
  escalaInicial = document.querySelector("#primEsc");
  escalaTransform = document.querySelector("#secEsc");
  valorInicial = document.querySelector("#valor");
  valor = Number(valorInicial.value);
  valorFinal = "";
  const valorEscInicial =
    escalaInicial.options[escalaInicial.selectedIndex].value;
  const valorEscTransform =
    escalaTransform.options[escalaTransform.selectedIndex].value;
  if (valorEscInicial == "Celsius") {
    if (valorEscTransform == "Celsius") {
      resposta.innerHTML = `A temperatura já está em <strong>${valorEscInicial}</strong>, tente usar outra temperatura.`;
      // resposta.style.color = "red";
    } else if (valorEscTransform == "Fahrenheit") {
      valorFinal = (valor * 9) / 5 + 32;
      resposta.innerHTML = valorFinal;
    } else if (valorEscTransform == "Kelvin") {
      valorFinal = valor + 273.15;
      resposta.innerHTML = valorFinal;
    }
  }
  if (valorEscInicial == "Fahrenheit") {
    if (valorEscTransform == "Celsius") {
      valorFinal = ((valor - 32) * 5) / 9;
      resposta.innerHTML = valorFinal;
    } else if (valorEscTransform == "Fahrenheit") {
      resposta.innerHTML = `A temperatura já está em <strong>${valorEscInicial}</strong>, tente transformar em outra.`;
      // resposta.style.color = "red";
    } else if (valorEscTransform == "Kelvin") {
      valorFinal = ((valor - 32) * 5) / 9 + 273.15;
      resposta.innerHTML = valorFinal;
    }
  }
  if (valorEscInicial == "Kelvin") {
    if (valorEscTransform == "Celsius") {
      valorFinal = valor - 273.15;
      resposta.innerHTML = valorFinal;
    } else if (valorEscTransform == "Fahrenheit") {
      valorFinal = ((valor - 273.15) * 9) / 5 + 32;
      resposta.innerHTML = valorFinal;
    } else if (valorEscTransform == "Kelvin") {
      resposta.innerHTML = `A temperatura já está em <strong>${valorEscInicial}</strong>, tente transformar em outra.`;
      // resposta.style.color = "red";
    }
  }
}

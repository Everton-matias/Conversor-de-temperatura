function verificar() {
  let resposta = document.querySelector(".resposta");
  let primeiraEscala =
    document.querySelector("#primeiraEscala").options[
      document.querySelector("#primeiraEscala").selectedIndex
    ].value;
  let segundaEscala =
    document.querySelector("#segundaEscolha").options[
      document.querySelector("#segundaEscolha").selectedIndex
    ].value;
  let valor = document.querySelector("#valor").value;
  let resultado = "";

  mesmasEscalas =
    primeiraEscala == segundaEscala
      ? ((resposta.innerHTML = `A temperatura já está em <strong>${primeiraEscala}</strong>, tente transformar em outra escala.`),
        (resposta.style.color = "red"))
      : conversao();

  function conversao() {
    if (primeiraEscala == "Celsius") {
      if (segundaEscala == "Fahrenheit") {
        resultado = (valor * 9) / 5 + 32;
      }
      if (segundaEscala == "Kelvin") {
        resultado = valor + 273.15;
      }
    }
    if (primeiraEscala == "Fahrenheit") {
      if (segundaEscala == "Celsius") {
        resultado = ((valor - 32) * 5) / 9;
      }
      if (segundaEscala == "Kelvin") {
        resultado = ((valor - 32) * 5) / 9 + 273.15;
      }
    }
    if (primeiraEscala == "Kelvin") {
      if (segundaEscala == "Celsius") {
        resultado = valor - 273.15;
      }
      if (segundaEscala == "Fahrenheit") {
        resultado = ((valor - 273.15) * 9) / 5 + 32;
      }
    }

    return (
      (resposta.innerHTML = resultado.toFixed(2)), (resposta.style.color = "")
    );
  }
}

export function calculate() {
  const buton = document.getElementById("botaoVerificador");

  buton.addEventListener("click", verificar);
}

// if (
//   primeiraEscala == "Celsius" ||
//   (valorEscTransform == "Celsius" && primeiraEscala == "Fahrenheit") ||
//   valorEscTransform == "Fahrenheit"
// ) {
//   valorFinal = (valor * 9) / 5 + 32;
// } else if (
//   primeiraEscala == "Celsius" ||
//   (valorEscTransform == "Celsius" && primeiraEscala == "Kelvin") ||
//   valorEscTransform == "Kelvin"
// ) {
//   valorFinal = valor + 273.15;
// } else if (
//   primeiraEscala == "Fahrenheit" ||
//   (valorEscTransform == "Fahrenheit" && primeiraEscala == "Kelvin") ||
//   valorEscTransform == "Kelvin"
// ) {
//   resposta = ((valor - 32) * 5) / 9 + 273.15;
// }
// console.log(resposta);

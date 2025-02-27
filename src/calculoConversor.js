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
  let valor = document.getElementById("valor").value;
  let resultado = "";

  mesmasEscalas =
    primeiraEscala == segundaEscala
      ? ((resposta.innerHTML = `A temperatura já está em <strong>${primeiraEscala}</strong>, tente transformar em outra escala.`),
        (resposta.style.color = "red"))
      : conversao();

  function conversao() {
    if (
      (primeiraEscala == "Celsius" || segundaEscala == "Celsius") &&
      (primeiraEscala == "Fahrenheit" || segundaEscala == "Fahrenheit")
    ) {
      resultado = (valor * 9) / 5 + 32;
    } else if (
      (primeiraEscala == "Celsius" || segundaEscala == "Celsius") &&
      (primeiraEscala == "Kelvin" || segundaEscala == "Kelvin")
    ) {
      resultado = valor * 1 + 273.15;
    } else if (
      (primeiraEscala == "Fahrenheit" || segundaEscala == "Fahrenheit") &&
      (primeiraEscala == "Kelvin" || segundaEscala == "Kelvin")
    ) {
      resultado = ((valor - 273.15) * 9) / 5 + 32;
    }

    return (
      (resposta.innerHTML = resultado.toFixed(2)), (resposta.style.color = "")
    );
  }
}

export function calcular() {
  const buton = document.getElementById("botaoVerificador");

  buton.addEventListener("click", verificar);
}

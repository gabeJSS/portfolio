const botao = document.getElementById("butao");
botao.addEventListener("click", () => {
  const cotamensal = document.getElementById("inputcota");
  const mbsmes1 = document.getElementById("inputmesUm");
  const valor1 = parseInt(cotamensal.value);
  const valor2 = parseInt(mbsmes1.value);
  const acrescimo = (valor1 - valor2);
  const mbsmes2 = (valor1 + acrescimo);
  console.log("Você terá " + mbsmes2 + " MBs no próximo mês.");
});
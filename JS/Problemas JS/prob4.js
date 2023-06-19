/*Escreva uma função que recebe um valor booleano ou numérico. Se o parâmetro
fornecido for booleano, o retorno deve ser o inverso.Por exemplo, se a entrada for
false, retorna true. Se o parâmetro for numérico, o retorno deve ser o número
inverso. Exemplo: se fornecer 1, o retorno deve ser -1. Se o parâmetro de entrada
não for de nenhum dos tipos, retorna “Booelano ou Número esperados, mas o
parâmetro é do tipo (tipo do parâmetro).*/
function inverterValor(parametro) {
    if (typeof parametro === 'boolean') {
      return !parametro;
    } else if (typeof parametro === 'number') {
      return -parametro;
    } else {
      return 'Booleano ou Número esperados, mas o parâmetro é do tipo ' + typeof parametro;
    }
  }
  console.log(inverterValor(true));
  console.log(inverterValor(false));
  console.log(inverterValor(5));
  console.log(inverterValor(-10));
  console.log(inverterValor('texto'));
    
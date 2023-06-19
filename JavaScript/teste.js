const nomes = ["Pedro", "João", "Maria", "Ana", "Carlos"];
const turmas = ["3A", "3B", "3C", "3A", "3B"];

const nomesTurmas = nomes.map((nome, index) => `${nome} da turma: ${turmas[index]}`);

console.log(nomesTurmas);


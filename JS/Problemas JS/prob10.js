function calcularMelhorDesempenho(estudantes) {
    let melhorAluno = null;
    let melhorMedia = -1;
  
    for (let aluno in estudantes) {
      const notas = estudantes[aluno];
      const media = calcularMedia(notas);
  
      if (media > melhorMedia) {
        melhorAluno = aluno;
        melhorMedia = media;
      }
    }
  
    return {
      nome: melhorAluno,
      media: melhorMedia
    };
  }
  
  function calcularMedia(notas) {
    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = soma / notas.length;
    return media;
  }
  const estudantes = {
    Augusto: [8, 7, 6, 9, 8],
    Mariana: [9, 8, 7, 6, 9],
    Carla: [7, 6, 8, 9, 7]
  };
  
  const melhorDesempenho = calcularMelhorDesempenho(estudantes);
  console.log(melhorDesempenho.nome);
  console.log(melhorDesempenho.media);
  
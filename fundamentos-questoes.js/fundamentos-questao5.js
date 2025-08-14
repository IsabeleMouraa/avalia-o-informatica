function checarIntervalo(a, b, c) {
    if (
      a >= 50 && a <= 99 &&
      b >= 50 && b <= 99 &&
      c >= 50 && c <= 99
    ) {
      console.log("Sucesso: todos os números estão no intervalo!");
    } else {
      console.log("Erro: um ou mais números estão fora do intervalo.");
    }
  }
  
  checarIntervalo(55, 60, 90);  
  checarIntervalo(49, 60, 90);  
  
function numeroMaisFrequente(arr) {
    const contador = {};
    let maxFreq = 0;
    let numeroComMaisOcorrencias;
  
    for (let num of arr) {
      contador[num] = (contador[num] || 0) + 1;
  
      if (contador[num] > maxFreq) {
        maxFreq = contador[num];
        numeroComMaisOcorrencias = num;
      }
    }
  
    console.log(`Número mais frequente: ${numeroComMaisOcorrencias} (ocorreu ${maxFreq} vezes)`);
    return numeroComMaisOcorrencias;
  }
  
  numeroMaisFrequente([3, 7, 3, 1, 7, 3, 2, 3, 7, 7]); 
  
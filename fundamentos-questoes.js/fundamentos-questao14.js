function verificarPalavraNaFrase(frase, palavra) {
    console.log("ops");
    if (frase.includes(palavra)) {
      console.log(`A palavra "${palavra}" está presente na frase.`);
    } else {
      console.log(`A palavra "${palavra}" NÃO está presente na frase.`);
    }
  }
  
  verificarPalavraNaFrase("Hoje o dia está lindo", "lindo");
  verificarPalavraNaFrase("Hoje o dia está lindo", "chuvoso"); 
  
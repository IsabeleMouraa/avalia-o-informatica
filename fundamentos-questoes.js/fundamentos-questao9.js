function somaTamanhosDasPalavras(frase) {
    
    const palavras = frase.trim().split(/\s+/);
  
    const soma = palavras.reduce((total, palavra) => total + palavra.length, 0);
  
    return soma;
  }
  
  const frase = "O conhecimento é poder";
  const resultado = somaTamanhosDasPalavras(frase);
  console.log(`Soma dos tamanhos das palavras: ${resultado}`); 
  
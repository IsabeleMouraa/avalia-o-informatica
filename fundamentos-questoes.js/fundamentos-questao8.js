function inverterFrase(frase) {
    return frase.split('').reverse().join('');
  }
  
 
  const frase = "olá mundo!";
  const fraseInvertida = inverterFrase(frase);
  
  console.log(`Frase original: ${frase}`);
  console.log(`Frase invertida: ${fraseInvertida}`);
  
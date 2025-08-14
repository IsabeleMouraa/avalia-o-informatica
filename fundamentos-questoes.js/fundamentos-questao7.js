function modificarFrase(frase) {
    const palavras = frase.trim().split(/\s+/);
  
    const palavrasModificadas = palavras.map(palavra => {
      if (palavra.length < 5) {
        return palavra.toUpperCase();
      } else if (palavra.length > 5) {
        return palavra.toLowerCase();
      } else {
        return palavra; // permanece igual se tiver 5 caracteres
      }
    });
  
    return palavrasModificadas.join(" ");
  }
  
  const frase = "Hoje é um excelente DIA para estudar JavaScript";
  const resultado = modificarFrase(frase);
  
  console.log("Frase modificada:");
  console.log(resultado);
    
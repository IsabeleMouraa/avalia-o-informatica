function palavraNaFrase(frase, palavra) {
    return frase.toLowerCase().includes(palavra.toLowerCase());
}

console.log(palavraNaFrase("Eu gosto de programação", "gosto")); 
console.log(palavraNaFrase("Eu gosto de programação", "Java"));  
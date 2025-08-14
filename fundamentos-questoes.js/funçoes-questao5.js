function maiorPalavra(frase) {
    let palavras = frase.split(/\s+/);
    let maior = palavras.reduce((a, b) => a.length >= b.length ? a : b);
    return maior;
}

console.log(maiorPalavra("O desenvolvimento de software é incrível"));

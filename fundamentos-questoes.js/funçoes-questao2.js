function contarVogaisConsoantes(frase) {
    let vogais = frase.match(/[aeiouáéíóúãõâêîôû]/gi) || [];
    let consoantes = frase.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
    return {
        vogais: vogais.length,
        consoantes: consoantes.length
    };
}

console.log(contarVogaisConsoantes("Olá mundo")); 

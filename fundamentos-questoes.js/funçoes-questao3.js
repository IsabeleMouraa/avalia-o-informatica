function maiorEMenor(lista) {
    let maior = Math.max(...lista);
    let menor = Math.min(...lista);
    return { maior, menor };
}

console.log(maiorEMenor([5, 2, 9, 1, 7, 6, 3, 8, 4, 0]));

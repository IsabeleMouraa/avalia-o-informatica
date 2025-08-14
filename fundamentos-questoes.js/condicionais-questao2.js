let contador = 0;
let numero;

do {
    numero = Number(prompt("Digite um número (0 para parar):"));
    if (numero > 0 && numero < 50) {
        contador++;
    }
} while (numero !== 0);

console.log("Quantidade de números entre 0 e 50:", contador);

const a = 7;
const b = 10;
const c = 5;

if (a + b > c && a + c > b && b + c > a) {
  
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  console.log(`A área do triângulo é: ${area.toFixed(2)} unidades²`);
} else {
  console.log("Os valores fornecidos não formam um triângulo válido.");
}

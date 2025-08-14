function somaDosCubos(lista) {
    const total = lista.reduce((soma, num) => soma + Math.pow(num, 3), 0);
    return total;
  }
  
  
  const resultado = somaDosCubos([1, 2, 3]); 
  console.log(`Soma dos cubos: ${resultado}`);
  
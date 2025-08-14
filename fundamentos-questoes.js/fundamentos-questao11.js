function ultimosElementos(lista, n) {
    
    if (n > lista.length) {
      return lista;
    }
    return lista.slice(-n);
  }
  
  const numeros = [10, 58, 68, 88, 25, 45];
  const n = 3;
  const resultado = ultimosElementos(numeros, n);
  
  console.log(`Últimos ${n} elementos:`, resultado);
  
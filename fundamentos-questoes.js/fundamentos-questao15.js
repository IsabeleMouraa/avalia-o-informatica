function ordenarListaNumerica(lista) {
    return lista.sort((a, b) => a - b);
  }
  
  const lista = [5, 1, 9, 3, 7];
  const ordenada = ordenarListaNumerica(lista);
  console.log(`Lista ordenada: ${ordenada}`); 
  
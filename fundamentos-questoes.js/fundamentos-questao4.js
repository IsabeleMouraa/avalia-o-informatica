function verificaTrinta(num1, num2) {
    return num1 === 30 || num2 === 30 || (num1 + num2 === 30);
  }
  
  console.log(verificaTrinta(30, 5));
  console.log(verificaTrinta(10, 20)); 
  console.log(verificaTrinta(15, 30)); 
  console.log(verificaTrinta(12, 5));  
  
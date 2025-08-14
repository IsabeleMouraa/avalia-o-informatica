

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
 
  function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  const tempCelsius = 25;
  const tempFahrenheit = 77;
  
  console.log(`${tempCelsius}°C equivalem a ${celsiusParaFahrenheit(tempCelsius).toFixed(2)}°F`);
  console.log(`${tempFahrenheit}°F equivalem a ${fahrenheitParaCelsius(tempFahrenheit).toFixed(2)}°C`);
  
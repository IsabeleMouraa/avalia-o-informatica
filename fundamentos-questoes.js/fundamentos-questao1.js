
function formatarDoisDigitos(numero) {
    return numero.toString().padStart(2, '0');
  }
  
  const agora = new Date();

  const diasDaSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
  ];
  
  const diaDaSemana = diasDaSemana[agora.getDay()];
  
  const horas = formatarDoisDigitos(agora.getHours());
  const minutos = formatarDoisDigitos(agora.getMinutes());
  const segundos = formatarDoisDigitos(agora.getSeconds());
  
  console.log(`Hoje é: ${diaDaSemana}.`);
  console.log(`A hora atual é: ${horas}:${minutos}:${segundos}.`);
  
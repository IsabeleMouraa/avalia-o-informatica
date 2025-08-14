
function formatarNomeCompleto(nomeCompleto) {
    // Separar o nome por espaços
    const partes = nomeCompleto.trim().split(" ");
  
    // Verificação mínima
    if (partes.length < 3) {
      return "Formato inválido: forneça nome, sobrenome e pelo menos um nome do meio.";
    }
  
    const primeiroNome = partes[0];
    const iniciaisMeio = partes.slice(1, -1).map(nome => nome[0].toUpperCase() + ".").join(" ");
    const inicialSobrenome = partes[partes.length - 1][0].toUpperCase() + ".";
  
    return `${inicialSobrenome} ${iniciaisMeio} ${primeiroNome}`;
  }

  const nome = "Isabele de Moura Maciel";
  const resultado = formatarNomeCompleto(nome);
  console.log(resultado);
  
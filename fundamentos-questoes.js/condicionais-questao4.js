let alunos = [
    [10, 5, 10], 
    [5, 5, 7],  
    [7, 8, 9]    
];

for (let i = 0; i < alunos.length; i++) {
    let soma = 0;
    for (let j = 0; j < alunos[i].length; j++) {
        soma += alunos[i][j];
    }
    let media = soma / alunos[i].length;
    let status = media >= 7 ? "Aprovado" : "Reprovado";
    console.log(`Aluno${i + 1}: média ${media.toFixed(2)} - ${status}`);
}
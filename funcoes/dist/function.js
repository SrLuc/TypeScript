//desafio de logica de programação financeira
function criteirosEmprestimos(renda, totalEmprestimo, Vprestacao) {
    if (totalEmprestimo > renda * 10) {
        console.log('Emprestimo não concedido devido a valor total ultrapassar taxa fixa multiplicadora de renda');
    }
    else if (Vprestacao <= renda * 0.3) {
        console.log('Emprestimo não concedido devido a valor da prestação ser menor que 30% da renda mensal');
    }
    else {
        console.log("Emprestimo concedido no valor de :" + totalEmprestimo);
    }
}
criteirosEmprestimos(300, 2000, 91);

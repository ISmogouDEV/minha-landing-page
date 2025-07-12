// A data de nascimento do Davi (ano, mês-1, dia)
// Se você nasceu em 1992, 10 de maio, seria: new Date(1992, 4, 10);
const dataNascimentoDavi = new Date(1993, 5, 18); // Exemplo: 12 de julho de 1992 (mês é 0-indexed, então julho é 6)

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();

    // Se o mês atual for menor que o mês de nascimento, ou se for o mesmo mês mas o dia atual for menor que o dia de nascimento,
    // significa que o aniversário ainda não ocorreu neste ano, então diminua 1 da idade.
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }
    return idade;
}

// Chame a função e atualize o elemento HTML
document.addEventListener('DOMContentLoaded', () => {
    const elementoIdade = document.getElementById('idadeDavi');
    if (elementoIdade) {
        elementoIdade.textContent = calcularIdade(dataNascimentoDavi);
    }
});
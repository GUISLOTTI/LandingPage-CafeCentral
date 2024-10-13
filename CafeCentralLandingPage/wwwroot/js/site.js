document.getElementById('marmitasForm').onsubmit = function(event) {
    event.preventDefault();

    const proteina = document.getElementById('proteina').value;
    const carbo1 = document.getElementById('carboidrato1').value;
    const carbo2 = document.getElementById('carboidrato2').value;
    const verdura1 = document.getElementById('verdura1').value;
    const verdura2 = document.getElementById('verdura2').value;

    const mensagem = `Pedido de Marmitinha Fitness: Proteína: ${proteina}, Carboidrato 1: ${carbo1}, Carboidrato 2: ${carbo2}, Verdura 1: ${verdura1}, Verdura 2: ${verdura2}`;
    const whatsappURL = `https://wa.me/5547999269788?text=${encodeURIComponent(mensagem)}`; // Substitua pelo número correto
    window.open(whatsappURL, '_blank');
};

function enviarPedido(nomeBolo, preco) {
    const mensagem = `Pedido de Bolo: ${nomeBolo}, Preço: R$ ${preco}`;
    const whatsappURL = `https://wa.me/5547999269788?text=${encodeURIComponent(mensagem)}`; // Substitua pelo número correto
    window.open(whatsappURL, '_blank');
}
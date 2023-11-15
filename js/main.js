function addProduct() {
    // Obter valores do formulário
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;

    // Validar se os campos estão preenchidos
    if (productName.trim() === '' || isNaN(productPrice)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Criar uma nova linha na tabela
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td>' + generateUniqueId() + '</td>' +
        '<td>' + productName + '</td>' +
        '<td>R$ ' + parseFloat(productPrice).toFixed(2) + '</td>';

    // Adicionar a nova linha à tabela
    document.getElementById('productTableBody').appendChild(newRow);

    // Limpar os campos do formulário
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
}

function generateUniqueId() {
    // Gera um ID único baseado no timestamp
    return 'product_' + Date.now();
}
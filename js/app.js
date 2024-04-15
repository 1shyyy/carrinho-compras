let valorCarrinho = 100;
limpar();

function adicionar(){
    let nomeProduto = document.getElementById('produto').value;
    let produto = nomeProduto.split('-')[0];
    let valorProduto = nomeProduto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let listaProdutos = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');
    valorCarrinho = valorCarrinho + parseInt(quantidade * valorProduto);
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${valorProduto * quantidade}</span>
  </section>`
    valorTotal.innerHTML = `R$${valorCarrinho}`;
    document.getElementById('quantidade').value = '';
}

function limpar(){
    let listaProdutos = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');
    listaProdutos.innerHTML = '';
    valorCarrinho = 0;
    valorTotal.innerHTML = `R$${valorCarrinho}`;
    quantidade.value = '';
}
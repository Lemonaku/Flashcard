function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="cartao__conteudo">
                                <h3>Biologia</h3>
                                <div class="cartao__conteudo__pergunta">
                                    <p>O que é a biologia?</p>   
                                </div>
                                <div class="cartao__conteudo__resposta">
                                    <p>Biologia é a ciência que estuda a vida, como ela se relaciona entre os seres, como se mantém.</p>
                                </div>
                        </div>
    `
    container.appendChild(cartao)
}
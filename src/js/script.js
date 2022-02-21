// Selecionando elemento ul do HTML
const ul = document.querySelector('.containerListaProdutos ul');



function montarListaProdutos(listaProdutos) {

    listaProdutos.forEach((produto) => {

        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ol = document.createElement('ol');
        const button = document.createElement('button')

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        button.innerText = 'Adicionar ao carrinho'
      
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ol) 
        for (let item of produto.componentes) {

            let comp = document.createElement('li')
            comp.innerText = item
            ol.appendChild(comp)

        }
        li.appendChild(button)
        ul.appendChild(li);

    });

    const botao = document.querySelectorAll("#listProdutos button")
    const ulCarrinho = document.querySelector('.containerCarrinho ul')

    somaCarrinho = 0

    for(let counter = 0; counter < botao.length; counter++) {

        botao[counter].addEventListener('click', (event)=>{ 
            
            const li = document.createElement('li');
            const img = document.createElement('img');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const span = document.createElement('span');

    
            img.src = produtos[counter].img;
            img.alt = produtos[counter].nome;
            h3.innerText = produtos[counter].nome;
            p.innerText = produtos[counter].preco;
            span.innerText = produtos[counter].secao;
            
            if(produtos[counter].promocao) {
                somaCarrinho += parseInt(produtos[counter].precoPromocao)
            } else {
                somaCarrinho += parseInt(produtos[counter].preco)
            }

            li.appendChild(img);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(span);
            ulCarrinho.appendChild(li);

            const telaMostrarSoma = document.querySelector('.containerPrecoTotal p span')
            telaMostrarSoma.innerHTML = somaCarrinho
        
        })

    }

}

montarListaProdutos(produtos)



function mostrarTodos() {

    const listaTodos = produtos.filter((produto) => {
        return produto
    });
    
    ul.innerHTML = ''
    montarListaProdutos(listaTodos);
    
}
const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
botaoMostrarTodos.addEventListener('click', mostrarTodos);



function filtrarPorHortifruti() {

    ul.innerHTML = ''
    
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });
    
    montarListaProdutos(listaHortifruti);   

}

const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);



const botaoBuscar = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
botaoBuscar.addEventListener('click', ()=>{

    let input = document.querySelector('.campoBuscaPorNome')
    let item = produtos.filter((produto) => { 
       return produto.nome.toLowerCase() === input.value.toLowerCase()
    })
    ul.innerHTML = ''
    montarListaProdutos(item)

});


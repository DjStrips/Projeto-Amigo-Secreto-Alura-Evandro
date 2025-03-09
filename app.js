//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nome = amigoInput.value.trim(); 


    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    amigos.push(nome); 
    amigoInput.value = ''; 
    atualizarLista(); 
}


function atualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = ''; 

    amigos.forEach(function(amigo) {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaElement.appendChild(listItem); 
    });
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome para realizar o sorteio.');
        return;
    }

    
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; 
    const resultItem = document.createElement('li');
    resultItem.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultadoElement.appendChild(resultItem);
}

// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validar se está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o nome ao array
    amigos.push(nome);

    // Atualizar a lista na tela
    atualizarLista();

    // Limpar o campo de entrada
    input.value = "";
}

// Função para atualizar a lista exibida
function atualizarLista() {
    // Obter a <ul> onde os amigos serão exibidos
    const lista = document.getElementById("listaAmigos");

    // Limpar o conteúdo antes de atualizar
    lista.innerHTML = "";

    // Percorrer o array e criar <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Validar se há amigos na lista
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    // Gerar índice aleatório
    const indice = Math.floor(Math.random() * amigos.length);

    // Obter nome sorteado
    const amigoSorteado = amigos[indice];

    // Mostrar o resultado na tela
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}

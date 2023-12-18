// Declaração e inicialização de variáveis
let minhaFila = new Queue(); // Cria uma nova instância da fila usando a função construtora.
let queueElementsDiv = document.getElementById("queue-elements"); // Obtém a referência ao elemento HTML que representa os elementos da fila.
let newElementInput = document.getElementById("newElementInput"); // Obtém a referência ao campo de entrada para o novo elemento.

// Função para atualizar a visualização da fila na página
function updateQueueView() {
  // Cria uma representação HTML dos elementos da fila, aplicando um estilo verde.
  let elementsHtml = minhaFila.elements.map(function (element, index) {
    return '<div class="queue-element" style="background-color: #00cc66;">' + element + '</div>';
  }).join('');

  // Atualiza o conteúdo do elemento HTML com a representação atualizada da fila.
  queueElementsDiv.innerHTML = elementsHtml;
}

// Função para adicionar um novo elemento à fila
function enqueueElement() {
  let newElement = newElementInput.value.trim(); // Obtém o valor do novo elemento e remove espaços em branco.

  // Verifica se o novo elemento é válido (não vazio e não é um número).
  if (newElement === "" || isNaN(newElement)) {
    alert("Digite um elemento válido.");
    return;
  }

  // Verifica se o limite de 10 itens na fila foi atingido.
  if (minhaFila.size() >= 10) {
    alert("Limite de itens atingido.");
    return;
  }

  // Adiciona o novo elemento à fila, atualiza a visualização e limpa o campo de entrada.
  minhaFila.enqueue(newElement);
  updateQueueView();
  newElementInput.value = "";
}

// Função para remover o elemento da frente da fila
function dequeueElement() {
  let removedElement = minhaFila.dequeue(); // Remove o elemento da frente da fila.

  // Verifica se o elemento foi removido com sucesso e atualiza a visualização.
  if (removedElement !== undefined) {
    updateQueueView();
  } else {
    alert("A fila está vazia.");
  }
}

// Função para exibir o tamanho atual da fila em um alerta.
function displaySize() {
  alert("Tamanho da fila: " + minhaFila.size());
}

// Definição da função construtora para criar uma fila
function Queue() {
  this.elements = []; // Inicializa a propriedade "elements" como uma matriz vazia.
}

// Método para adicionar um elemento à fila
Queue.prototype.enqueue = function (element) {
  this.elements.push(element); // Adiciona o elemento à parte final da fila.
};

// Método para remover e retornar o elemento na frente da fila
Queue.prototype.dequeue = function () {
  return this.elements.shift(); // Remove o elemento da frente da fila e o retorna.
};

// Método para retornar o tamanho atual da fila
Queue.prototype.size = function () {
  return this.elements.length; // Retorna o comprimento da matriz, que representa o tamanho atual da fila.
};

// Método para verificar se a fila está vazia
Queue.prototype.isEmpty = function () {
  return this.elements.length === 0; // Retorna verdadeiro se a fila estiver vazia, caso contrário, retorna falso.
};

// Chamada inicial para atualizar a visualização da fila ao carregar a página.
updateQueueView();

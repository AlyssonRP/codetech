// Espera até que o conteúdo da página esteja completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Obtém referências para elementos do DOM
    const listContainer = document.getElementById('list-container');
    const elementInput = document.getElementById('element-input');
    const addBtn = document.getElementById('add-btn');
    const deleteBtn = document.getElementById('delete-btn');
  
    // Adiciona um ouvinte de eventos para o botão "Adicionar Elemento"
    addBtn.addEventListener('click', function () {
      // Cria um novo elemento de lista
      const newItem = document.createElement('div');
      newItem.classList.add('list-item'); // Adiciona a classe 'list-item'
      newItem.textContent = elementInput.value; // Define o texto do item
  
      // Adiciona um ouvinte de eventos para remover o item ao ser clicado
      newItem.addEventListener('click', function () {
        this.classList.add('removing'); // Adiciona a classe 'removing' para iniciar a animação
        this.addEventListener('animationend', function () {
          listContainer.removeChild(this); // Remove o elemento após a conclusão da animação
        });
      });
  
      // Insere o novo item no início da lista
      listContainer.insertBefore(newItem, listContainer.firstChild);
      
      // Ativa a animação após um pequeno intervalo
      setTimeout(() => newItem.classList.add('active'), 10);
  
      // Limpa o campo de entrada após adicionar o elemento
      elementInput.value = '';
    });
  
    // Adiciona um ouvinte de eventos para o botão "Deletar Elemento"
    deleteBtn.addEventListener('click', function () {
      // Obtém todos os itens da lista
      const listItems = document.querySelectorAll('.list-item');
      if (listItems.length > 0) {
        const lastItem = listItems[listItems.length - 1]; // Obtém o último item da lista
        lastItem.classList.add('removing'); // Adiciona a classe 'removing' para iniciar a animação
        lastItem.addEventListener('animationend', function () {
          listContainer.removeChild(this); // Remove o último item após a conclusão da animação
        });
      }
    });
  });
  
document.addEventListener('DOMContentLoaded', function () {
  const arrayContainer = document.getElementById('array-container');
  const addBtn = document.getElementById('add-btn');
  const deleteBtn = document.getElementById('delete-btn');
  const elementInput = document.getElementById('element-input');

  // Array para armazenar os elementos
  let array = [];

  // Função para renderizar os elementos na tela
  function renderArray() {
    arrayContainer.innerHTML = '';
    array.forEach(item => {
      const arrayItem = document.createElement('div');
      arrayItem.className = 'array-item';
      arrayItem.textContent = item;
      arrayContainer.appendChild(arrayItem);
    });
  }

  // Adicionar elemento ao array
  function addElement() {
    const newElement = elementInput.value.trim();
    if (newElement !== '' && array.length < 20) {
      array.push(newElement);
      elementInput.value = '';
      renderArray();
    } else {
      alert('Limite de 20 elementos atingido!');
    }
  }

  // Deletar último elemento do array
  function deleteElement() {
    array.pop();
    renderArray();
  }

  // Adicionar eventos aos botões
  addBtn.addEventListener('click', addElement);
  deleteBtn.addEventListener('click', deleteElement);
});


// Seleciona elementos do DOM
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const deleteBtns = document.querySelectorAll('.delete-btn');
const editBtns = document.querySelectorAll('.edit-btn');

// Função para alternar o menu lateral
menuBtn.addEventListener('click', () => {
  if (sidebar.style.left === '0px') {
    sidebar.style.left = '-250px'; // Esconde o menu
  } else {
    sidebar.style.left = '0px'; // Mostra o menu
  }
});

// Função para excluir um livro
deleteBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const bookItem = event.target.closest('.book-item');
    if (confirm('Tem certeza que deseja excluir este livro?')) {
      bookItem.remove();
    }
  });
});

// Função para editar um livro
editBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const bookItem = event.target.closest('.book-item');
    const bookTitle = bookItem.querySelector('.book-title').textContent;

    const newTitle = prompt('Editar título do livro:', bookTitle);
    if (newTitle) {
      bookItem.querySelector('.book-title').textContent = newTitle;
    }
  });
});

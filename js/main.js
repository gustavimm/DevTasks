document.addEventListener('DOMContentLoaded', () => {
  setupFilters(); // Ativa os botões de filtro

  form.addEventListener('submit', event => {
    event.preventDefault();
    const text = taskInput.value.trim();
    if (text !== '') {
      addTask(text);
      taskInput.value = '';
      showSuccessMessage();
    }
  });
});
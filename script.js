//Selecionando elementos do DOM.
const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


//Função que cria um novo item na lista.
function addTask(text) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.textContent = text;

    taskList.appendChild(li);
}


//Escutando o envio do Formulário.

form.addEventListener ('submit', function(event){
    event.preventDefault(); //Impedindo o recarregamento da Página.


    const taskText = taskInput.value.trim(); //Pegando e limpando o valor.

    if (taskText !== '') {
        addTask(taskText); //Adiciona na Lista.
        taskInput.value = ''; //Limpa o Input.
    }
});



 
//Selecionando elementos do DOM
const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('#filter-buttons button');


//Função que cria um novo item na lista
function addTask(text) {
    const li = document.createElement('li');
    li.classList.add('task-item');


const taskText = document.createElement('span');
taskText.textContent = text;
taskText.classList.add('task-text');

const removeButton = document.createElement('button');
removeButton.textContent = ' ❌ '
removeButton.classList.add('remove-btn');


// Ao clicar no texto, marca/desmarca como tarefa concluída
taskText.addEventListener('click', function (){
    taskText.classList.toggle('done');
});

li.appendChild(taskText);
li.appendChild(removeButton);
taskList.appendChild(li);

removeButton.addEventListener('click', function(){
    li.remove();
});


//Adiciona a tarefa e o botão no li

li.appendChild(taskText);
li.appendChild(removeButton);

taskList.appendChild(li);

//Adiciona o evento de remover a tarefa ao botão

removeButton.addEventListener('click', function() {
    li.remove(); //Remove o item da lista
});

}






//Escutando o envio do Formulário

form.addEventListener ('submit', function(event){
    event.preventDefault(); //Impedindo o recarregamento da Página


    const taskText = taskInput.value.trim(); //Pegando e limpando o valor

    if (taskText !== '') {
        addTask(taskText); //Adiciona na Lista
        taskInput.value = ''; //Limpa o Input
    }
});

//Função para filtrar as tarefas
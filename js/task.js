import {taskList} from './dom.js';


//Função que cria um novo item na lista
export function addTask(text) {
    const li = document.createElement('li');
    li.classList.add('task-item');


const taskText = document.createElement('span');
taskText.textContent = text;
taskText.classList.add('task-text');

const removeButton = document.createElement('button');
removeButton.textContent = ' ❌ '
removeButton.classList.add('remove-btn');

//Adiciona ou remove a classe de prioridade

const priorityButton = document.createElement('button');
priorityButton.textContent = '⭐️';
priorityButton.classList.add('priority-btn');

li.appendChild(priorityButton); //Adiciona o botão de prioridade ao item da lista

priorityButton.addEventListener('click', () => {
    li.classList.toggle('priority'); //Adicionando ou removendo prioridade
    if (li.classList.contains('priority')) {
        taskList.prepend(li); //Move para o topo da lista
    }
    updateTaskOrder(); //Chama a função para atualizar a ordem das tarefas
    
});


// Ao clicar no texto, marca/desmarca como tarefa concluída
taskText.addEventListener('click', function (){
    taskText.classList.toggle('done');
});

li.appendChild(taskText);
li.appendChild(removeButton);


taskList.appendChild(li);

//Adiciona o evento de remover a tarefa ao botão

removeButton.addEventListener('click', function() {
    li.remove(); //Remove o item da lista
});

}


//Função para reorganizar a lista, mantendo tarefas prioritárias no topo

function updateTaskOrder (){
    const tasks = Array.from(document.querySelectorAll('.task-item'));

    tasks.sort((a, b) => {
        return b.classList.contains('priority') - a.classList.contains('priority');
    });
    tasks.forEach(task => taskList.appendChild(task)); //Reordena na lista.

}

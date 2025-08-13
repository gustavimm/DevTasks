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


//Escutando o envio do Formulário

form.addEventListener ('submit', function(event){
    event.preventDefault(); //Impedindo o recarregamento da Página


    const taskText = taskInput.value.trim(); //Pegando e limpando o valor

    if (taskText !== '') {
        addTask(taskText); //Adiciona na Lista
        showSuccessMessage(); //Chama a função para mostrar a mensagem de sucesso
        taskInput.value = ''; //Limpa o Input
    }
});

//Função para filtrar as tarefas    

filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            const tasks = document.querySelectorAll('.task-item');

            tasks.forEach(task => {
                const isDone = task.querySelector('span').classList.contains('done');
                task.classList.remove('hidden')

               if (filter === 'completed' && !isDone) {
                    task.classList.add('hidden');
                 
                    
                } else if (filter === 'pending' && isDone) {
                    task.classList.add('hidden')
                }
            })
        })

})

//Função para reorganizar a lista, mantendo tarefas prioritárias no topo

function updateTaskOrder (){
    const tasks = Array.from(document.querySelectorAll('.task-item'));

    tasks.sort((a, b) => {
        return b.classList.contains('priority') - a.classList.contains('priority');
    });
    tasks.forEach(task => taskList.appendChild(task)); //Reordena na lista.

}

//Dentro da função addTask(), chamamos updateTaskOrder() ao clicar no botão de prioridade :

function showSuccessMessage() {
        const message = document.getElementById('success-message');
        message.classList.remove('hidden'); //Remove a classe 'hidden' para mostrar a mensagem
        message.classList.add('visible'); //Adiciona a classe 'visible' para exibir a mensagem

        setTimeout(() => {
            message.classList.remove('visible'); //Remove a classe 'visible' para esconder a mensagem
            message.classList.add('hidden'); //Adiciona a classe 'hidden' para esconder a mensagem
        }, 2000); // Tempo em milissegundos (2 segundos)
    }
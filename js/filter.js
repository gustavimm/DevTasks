import { filterButtons } from "./dom.js";

//Função para filtrar as tarefas    

export function setupFilters() {
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
}
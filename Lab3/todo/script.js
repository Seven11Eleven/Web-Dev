document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks-list');

    addTaskButton.addEventListener('click', (e) => {
        const taskText = input.value.trim();
        if (taskText ==='') return ;

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.addEventListener('change', () =>{
            taskItem.classList.toggle('done');
        });

        const text = document.createElement('span');
        text.className = 'task-text';
        text.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent= 'Delete task';
        deleteButton.addEventListener('click', () =>{
            tasksList.removeChild(taskItem);
        });

        taskItem.appendChild(checkBox);
        taskItem.appendChild(text);
        taskItem.appendChild(deleteButton);

        tasksList.appendChild(taskItem);
        input.value = '';
    });

    input.addEventListener('keypress', (e) =>{
        if (e.key == 'Enter'){
            addTaskButton.click();
        }
    })
});
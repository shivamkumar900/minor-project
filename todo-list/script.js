
document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span>${taskText}</span>
                <button class="remove-btn">Remove</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            const listItem = e.target.parentElement;
            taskList.removeChild(listItem);
        }
        
        if (e.target.classList.contains('task-checkbox')) {
            const listItem = e.target.parentElement;
            const taskSpan = listItem.querySelector('span');
            if (e.target.checked) {
                taskSpan.style.textDecoration = 'line-through';
            } else {
                taskSpan.style.textDecoration = 'none';
            }
        }
    });
});


// Utility: format a Date object as a readable string
const formatDate = (date = new Date()) => date.toLocaleDateString();

import { createTaskElement } from './createitems.js';


// Add a task from the input to the task list
const addTask = () => {
    const input = document.getElementById('taskInput');
    if (!input) return;

    const val = input.value.trim();
    if (!val) {
        alert('add a task');
        return;
    }

    const taskItem = createTaskElement(val);
    const list = document.getElementById('taskList');
    if (list) list.appendChild(taskItem);
    input.value = '';
};
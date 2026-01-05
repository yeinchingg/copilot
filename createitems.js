const createTaskElement = (text) => {
    const li = document.createElement('li');
    li.textContent = `${text} - ${formatDate()}`;
    li.style.color = 'blue';
    li.addEventListener('click', () => {
        li.remove();
        alert('removed');
    });
    return li;
};
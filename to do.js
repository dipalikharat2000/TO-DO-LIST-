

const newTaskInput = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(listItem);
    newTaskInput.value = '';
    setupDeleteButtons();
  }
}

function setupDeleteButtons() {
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.parentNode.remove();
    });
  });
}

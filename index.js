let tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== '') {
    tasks.push(task);
    taskInput.value = ''; // Clear input field
    displayTasks(); // Update task list display
  }
}

// Function to display tasks in the list
function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear previous list

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${task}`;
    taskList.appendChild(li);
  });
}

// Function to sort tasks alphabetically
function sortTasks() {
  tasks.sort();
  displayTasks(); // Update task list display
}
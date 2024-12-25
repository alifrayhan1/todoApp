const date123 =document.querySelector('#date123');

const today = new Date();
const date = today.getDate();
const dayOfWeek = today.getDay(); 
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[dayOfWeek];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];  
const month = monthNames[today.getMonth()];
date123.innerHTML = `${month} ${date},${dayName}`;











const todoInputTask = document.querySelector('#todoInputTask');
const todoInputArea = document.querySelector('#todoInputArea');
const todoInputButton =document.querySelector('#todoInputButton');
const todoInput = document.querySelector('#todoInput');
const todoList =document.querySelector('#todoList');
const saveIcon = document.querySelector('#saveIcon');


todoInputTask.addEventListener('click', (e) => {
  e.preventDefault();
  todoInputArea.style.display = 'block';
  todoInputTask.style.color = '#60a5fa';
  todoInputButton.style.display = 'none';

});
todoInputButton.addEventListener('click', (e) => {
  e.preventDefault();
  todoInputArea.style.display = 'block';
  todoInputButton.style.display = 'none';
  
});



saveIcon.addEventListener('click',(e)=>{
  e.preventDefault();
  if (todoInput.value === '') {
    alert('add your task')
  } else {
    let li = document.createElement('li');
    li.innerHTML = todoInput.value;
    todoList.appendChild(li);
    let edit_I =document.createElement('i');
    edit_I.textContent = '⌨';   
    li.appendChild(edit_I); 
    let span =document.createElement('span');
    span.textContent = '\u00d7';
    li.appendChild(span);
    todoInputArea.style.display = 'none'
    todoInputButton.style.display = 'block';
  
  }
  todoInput.value ='';
  
});




todoList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove(); 
  } 
  // else if(e.target.tagName === 'I'){
  //   e.target.previousSibling.value= todoInput.textContent;
    
  //   todoInputArea.style.display = 'block';
  //   todoInputButton.style.display = 'none';     
  // }
});
























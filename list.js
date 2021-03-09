loadEvents();

const date = document.querySelector('#date');
const options = {weekday: "long", month: "long", day:"numeric"};
const today = new Date();

date.innerHTML = today.toLocaleDateString("en", options)


function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.querySelector('#clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteOrDone);

}

function submit(e){
  e.preventDefault();
  let taskList;
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}


function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

function clearList(e){
  let ul = document.querySelector('ul').innerHTML = '';
}

function deleteOrDone(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    doneTask(e);
  }
}

function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

function doneTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "red";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#fff";
  }}
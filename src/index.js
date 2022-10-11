$(function() {
  register_checkboxes();
  register_delete_buttons();
});

function register_checkboxes() {
 // Select all checkboxes with the name 'done' using querySelectorAll.
 const checkboxes = document.querySelectorAll("input[type=checkbox][name=done]");
 // strike through task if checkbox is checked
 checkboxes.forEach(function(checkbox) {
   checkbox.addEventListener('change', function() {
     const description = checkbox.parentElement.getElementsByClassName("task-description")[0];
     description.classList.toggle("strikethrough");
   })
 });
}

function register_delete_buttons() {
 // Select all checkboxes with the name 'done' using querySelectorAll.
 const btns = document.querySelectorAll("button[type=submit][name=delete]");
 // strike through task if checkbox is checked
 btns.forEach(function(btn) {
   btn.addEventListener('click', function() {
     btn.parentElement.classList.add("removed");
   })
 });
}

function register_bolts() {
 
}


// select add button and add event listener
document.getElementById("btn-add").addEventListener("click", add_todo);
// function to add new todo
function add_todo() {
 // get description from text input
 const description = document.getElementById("txt-add");
 if (!description.value) {
   alert("'Aufgabe' darf nicht leer sein");
   return;
 }
 // add to task-list 
 const task_list = document.getElementsByClassName("task-list")[0]; //task_list 
 task_list.innerHTML += 
             `<div class='flex-horizontal task-entry'> \
               <input type='checkbox' name='done' class='done-checkbox'> \
               <label class='bolt prio-1'>🗲</label> \
               <label class='bolt prio-2'>🗲</label> \
               <label class='bolt prio-3'>🗲</label> \
               <label class='task-description'> ${description.value} </label> \
               <button type='submit' class='button delete' name='delete'>Löschen</button> \
             </div>`;
 // register new elements
 register_checkboxes();
 register_delete_buttons()
 
 // remove text
 description.value = "";
}
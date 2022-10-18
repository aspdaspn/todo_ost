$(function () {
  register_checkboxes()
  register_delete_buttons()
  register_bolts()
  document.getElementById('btn-add').addEventListener('click', add_todo);
})

function register_checkboxes() {
  // Select all checkboxes with the name 'done' using querySelectorAll.
  const checkboxes = document.querySelectorAll(
    'input[type=checkbox][name=done]'
  )
  // strike through task if checkbox is checked
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      const description = checkbox.parentElement.getElementsByClassName(
        'task-description'
      )[0]
      description.classList.toggle('strikethrough')
    })
  })
}

function register_delete_buttons() {
  // Select all checkboxes with the name 'done' using querySelectorAll.
  const btns = document.querySelectorAll('button[type=submit][name=delete]')
  // strike through task if checkbox is checked
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.parentElement.classList.add('removed')
    })
  })
}

function register_bolts() {
  const bolts = document.querySelectorAll('label[class=bolt]')
  bolts.forEach(function (bolt) {
    bolt.addEventListener('click', function () {
      const taskPrio = getPrio(bolt.parentElement)
      const boltNr = parseInt(bolt.getAttribute('name').replace('prio-', ''))
      if (taskPrio === boltNr) {
        setPrio(bolt.parentElement, 0)
      } else {
        setPrio(bolt.parentElement, boltNr)
      }
    })
  })
}

// select add button and add event listener


// function to add new todo
function add_todo() {
  // get description from text input
  const description = document.getElementById('txt-add')
  if (!description.value) {
    alert("'Aufgabe' darf nicht leer sein")
    return
  }
  // add to task-list
  const task_list = document.getElementsByClassName('task-list')[0] //task_list
  task_list.innerHTML += `<div class='flex-horizontal task-entry'> \
                <input type='checkbox' name='done' class='done-checkbox'> \
                <label class='bolt prio-1'>🗲</label> \
                <label class='bolt prio-2'>🗲</label> \
                <label class='bolt prio-3'>🗲</label> \
                <label class='task-description'> ${description.value} </label> \
                <button type='submit' class='button delete' name='delete'>Löschen</button> \
              </div>`
  // register new elements
  register_checkboxes()
  register_delete_buttons()
  register_bolts()

  // remove text
  description.value = ''
}

function getPrio(task_entry) {
  const prio1 = task_entry.querySelectorAll('label[name=prio-1]')[0]
  const prio2 = task_entry.querySelectorAll('label[name=prio-2]')[0]
  const prio3 = task_entry.querySelectorAll('label[name=prio-3]')[0]
  if (!prio1.classList.contains('bolt-active')) {
    return 0
  } else if (!prio2.classList.contains('bolt-active')) {
    return 1
  } else if (!prio3.classList.contains('bolt-active')) {
    return 2
  } else {
    return 3
  }
}

function setPrio(task_entry, prio) {
  const prio1 = task_entry.querySelectorAll('label[name=prio-1]')[0]
  const prio2 = task_entry.querySelectorAll('label[name=prio-2]')[0]
  const prio3 = task_entry.querySelectorAll('label[name=prio-3]')[0]
  switch (prio) {
    case 0:
      prio1.classList.remove('bolt-active')
      prio2.classList.remove('bolt-active')
      prio3.classList.remove('bolt-active')
      break
    case 1:
      prio1.classList.add('bolt-active')
      prio2.classList.remove('bolt-active')
      prio3.classList.remove('bolt-active')
      break
    case 2:
      prio1.classList.add('bolt-active')
      prio2.classList.add('bolt-active')
      prio3.classList.remove('bolt-active')
      break
    case 3:
      prio1.classList.add('bolt-active')
      prio2.classList.add('bolt-active')
      prio3.classList.add('bolt-active')
      break
    default:
      console.log('prio not definded')
  }
}

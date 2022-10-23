register_checkboxes()
register_delete_buttons()
register_bolts()
register_sort_selector()
show_all_selector()

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
  // Remove this debug later

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

function register_sort_selector() {
  const sort = document.getElementsByClassName('sort');
  const states = ['none', 'up', 'down'];
  const htmlCodes = ['', '<i class="fa-solid fa-arrow-up"></i>', '<i class="fa-solid fa-arrow-down"></i>'];

  sort[0].addEventListener('click', function(ev) {
    // Up, Down
    sort[1].dataset.sort = states[0];
    sort[1].innerHTML = "Beschreibung";
    let i = states.indexOf(sort[0].dataset.sort);
    i = ++i % states.length;
    if (i === 0) {
      ++i;
    }
    sort[0].dataset.sort = states[i];
    sort[0].innerHTML = 'Priorität&nbsp;' + htmlCodes[i];
    sortList('prio');
  });
  sort[1].addEventListener('click', function(ev) {
    sort[0].dataset.sort = states[0];
    sort[0].innerHTML = "Priorität";
    let i = states.indexOf(sort[1].dataset.sort);
    i = ++i % states.length;
    if (i === 0) {
      ++i;
    }
    sort[1].dataset.sort = states[i];
    sort[1].innerHTML = 'Beschreibung&nbsp;' + htmlCodes[i];
    sortList('task');
  });
}

function show_all_selector() {
  const showAllCheck = document.querySelector('input[type=checkbox][name=show-all]');
  showAllCheck.addEventListener('change', function(ev) {
    if (showAllCheck.checked) {
      if_hide_task('show');
    } else {
      if_hide_task('hide');
    }
  });
}

function if_hide_task(p1) {
    task = document.getElementsByClassName('task-entry');
    for (let i = 1; i < task.length; i++) {
      let t = task[i].getElementsByClassName('strikethrough')[0];
      if (t != undefined) {
        let div = t.parentElement;
        if (p1 === 'hide') {
          div.style.display = "none";
        } else {
          div.style.display = "grid";
        }
      }
    }
}

// select add button and add event listener
document.getElementById('btn-add').addEventListener('click', add_todo)

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
                <label class="bolt" name="prio-1"><i class="fa-solid fa-bolt"></i></label> \
                <label class="bolt" name="prio-2"><i class="fa-solid fa-bolt"></i></label> \
                <label class="bolt" name="prio-3"><i class="fa-solid fa-bolt"></i></label> \
                <label class='task-description'> ${description.value} </label> \
                <button type='submit' class='button delete' name='delete'>Löschen</button> \
              </div>`
  // register new elements
  register_checkboxes()
  register_delete_buttons()
  register_bolts()
  register_sort_selector()

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

function sortList(p1) {
  let i, switching, b, shouldSwitch, dir, switchcount = 0;
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  // Main search loop
  while (switching) {
    switching = false;
    b = document.getElementsByClassName('task-entry');
    for (i = 1; i < (b.length - 1); i++) {
      shouldSwitch = false;
      let name1 = b[i].getElementsByClassName('task-description')[0].innerHTML.toLowerCase();
      let name2 = b[i + 1].getElementsByClassName('task-description')[0].innerHTML.toLowerCase();
      if (dir === "asc") {
        if (p1 === 'task') {
          if (name1 < name2) {
            shouldSwitch = true;
            break;
          }
        } else {
          // Sort by Priority
          if (getPrio(b[i]) + 1 < getPrio(b[i + 1]) + 1) {
            shouldSwitch = true;
            break;
          }
        }
      } else if (dir === "desc") {
        if (p1 === 'task') {
          if (name1 > name2) {
            shouldSwitch = true;
            break;
          }
        } else {
          // Sort by Priority
          if (getPrio(b[i]) > getPrio(b[i + 1])) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

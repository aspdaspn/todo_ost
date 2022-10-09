// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.id !== 'liheader') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Add an event listener for Enter key for the form
const input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    newElement();
  }
});

// Add priority selector
function newPrioritySelector() {
  const prio = document.querySelectorAll('span[class^="prio"]');
  for (const _prio of prio) {
    _prio.addEventListener('click', (e) => {
      const cName = e.target.className;
      const pN = cName[cName.length - 1];
      const cParent = e.target.parentNode;
      cParent.setAttribute('data-prio', pN);
    });
  }
}

// Remove line if close is selected
function setEventToDeleteLine() {
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.remove();
      if (close.length === 0) {
        const ifHasHeader = document.getElementById("liheader");
        ifHasHeader.remove();
      }
    }
  }
}

function sortList() {
  let i, switching, b, shouldSwitch, dir, switchcount = 0;
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  // Main search loop
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 1; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (dir === "asc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
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

// Create a new list item when clicking on the "Add" button
function newElement() {
  const liHeader = document.createElement("li");
  liHeader.id = "liheader";
  liHeader.innerHTML = 'Aufgabe <span class="taskasc">▲▼</span><span class="ptitle">Priority <span class="pasc">▲▼</span></span>';
  const li = document.createElement("li");
  li.setAttribute('data-prio', '0');
  const inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("Sie sollten etwas eingeben");
  } else {
    const ifHasHeader = document.getElementById("liheader");
    if (ifHasHeader === null) {
      document.getElementById("myUL").appendChild(liHeader);
      const sortTask = document.querySelector('span[class=taskasc]');
      console.log(sortTask);
      sortTask.addEventListener('click', sortList, false);
    }
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  li.innerHTML = inputValue + '<span class="prio1">🗲</span><span class="prio2">🗲</span><span class="prio3">🗲</span>';
  li.innerHTML += '<span class="close">🗑</span>';

  setEventToDeleteLine();
  newPrioritySelector();
}

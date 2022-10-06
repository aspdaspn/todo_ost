// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

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

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.setAttribute('data-prio', '0');
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("Sie sollten etwas eingeben");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  li.innerHTML = inputValue + '<span class="prio1">🗲</span><span class="prio2">🗲</span><span class="prio3">🗲</span>';
  li.innerHTML += '<span class="close">🗑</span>';

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }
  newPrioritySelector();
}

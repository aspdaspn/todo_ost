// Create a priority field and append it to each list item
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var spanClose = document.createElement("SPAN");
  var spanPrio = document.createElement("SPAN");
  var txtClose = document.createTextNode("🗑");
  var txtPrio = document.createTextNode("🗲");
  spanClose.className = "close";
  spanPrio.className = "priority";
  spanPrio.appendChild(txtPrio);
  spanClose.appendChild(txtClose);
  myNodelist[i].appendChild(spanPrio);
  myNodelist[i].appendChild(spanClose);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Sie sollten etwas eingeben");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var spanClose = document.createElement("SPAN");
  var spanPrio = document.createElement("SPAN");
  var txtClose = document.createTextNode("🗑");
  var txtPrio = document.createTextNode("🗲");
  spanPrio.className = "priority";
  spanPrio.appendChild(txtPrio);
  li.appendChild(spanPrio);
  spanClose.className = "close";
  spanClose.appendChild(txtClose);
  li.appendChild(spanClose);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

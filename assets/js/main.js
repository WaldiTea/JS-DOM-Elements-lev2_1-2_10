// lev2_1
let listItem = document.getElementById('listItem');

function changeMe() {
  listItem.classList.add('change');

  listItem.innerHTML = 'emoH'
}

// lev2_2
let vorname = document.getElementById('vorname');
let nachname = document.getElementById('nachname');
let land = document.getElementById('land');

function weiterLeiten() {
  console.log("Full name: " + vorname.value + " " + nachname.value + ", " + "Land: " + land.value);
}

// lev2_10
let elementItem = document.getElementById('element');

function small() {
  elementItem.classList.add('small');
  elementItem.classList.remove('middle');
  elementItem.classList.remove('big');
}

function middle() {
  elementItem.classList.add('middle');
  elementItem.classList.remove('small');
  elementItem.classList.remove('big');
}

function bigCrazy() {
  elementItem.classList.add('big');
  elementItem.classList.remove('middle');
  elementItem.classList.remove('small');

  elementItem.style.transition = 'all, 0.5s';
}
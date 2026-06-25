let home = document.querySelector('home');
let about = document.querySelector('about');
let portButton = document.querySelector('#portfolio');

let i = 0;
let txt = 'Christopher Castellon-Perez';
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
    typeWriter();
};


portButton.addEventListener('click', function() {
  window.location.href = 'http://127.0.0.1:3000/Projects.html?vscode-livepreview=true';
})
let menu = document.querySelector('.menu');
let right = document.querySelector('.right');
let left = document.querySelector('.left');
let enter = document.querySelector('.enter');
let change = document.querySelector('.change');
let game = document.querySelector('.game');
let resume = document.querySelector('.resume');
let img = document.querySelector('.display-IMG');
let txt = document.querySelector('.wrapper');

let pOne = document.querySelector('.one');
let pTwo = document.querySelector('.two');
let pThree = document.querySelector('.three');
let pFour = document.querySelector('.four');

let displayNum = 1;
let link = 'http://127.0.0.1:3002/index.html?vscode-livepreview=true';

menu.addEventListener('click', () => {
    window.location.href = 'Home.html';

})

enter.addEventListener('click', () => {
    window.open(link, '_blank');

})


left.addEventListener('click', () => {
    if (displayNum > 1) {
        displayNum--;
        updateDisplay();
    }

})

right.addEventListener('click', () => {
    if (displayNum < 4) {
        displayNum++;
        updateDisplay();
    }

})

function updateDisplay() {
        if (displayNum === 1) {
            change.style.display = 'inline';
            game.style.display = 'none';
            resume.style.display = 'none';

            pOne.style.display = 'inline';
            pTwo.style.display = 'none';
            pThree.style.display = 'none';
            pFour.style.display = 'none';

            link = 'http://127.0.0.1:3002/index.html?vscode-livepreview=true';
        }
        else if (displayNum === 2) {
            change.style.display = 'none';
            game.style.display = 'inline';
            resume.style.display = 'none';

            pOne.style.display = 'none';
            pTwo.style.display = 'inline';
            pThree.style.display = 'none';
            pFour.style.display = 'none';

            link = 'http://127.0.0.1:3004/index.html?vscode-livepreview=true';
        }
        else if (displayNum === 3) {
            change.style.display = 'none';
            game.style.display = 'none';
            resume.style.display = 'inline';

            pOne.style.display = 'none';
            pTwo.style.display = 'none';
            pThree.style.display = 'inline';
            pFour.style.display = 'none';
            img.style.display = 'inline';
            txt.style.width = '200px'

            link = 'https://www.canva.com/design/DAHMvtEsWrA/U_Ng3X87Gc4bh2SpqkErGg/edit';
        }
        else if (displayNum === 4) {
            change.style.display = 'none';
            game.style.display = 'none';
            resume.style.display = 'none';
            
            pOne.style.display = 'none';
            pTwo.style.display = 'none';
            pThree.style.display = 'none';
            pFour.style.display = 'inline';
            img.style.display = 'none';
            txt.style.width = '90%'
        }
    }

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
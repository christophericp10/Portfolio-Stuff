// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('utilities').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
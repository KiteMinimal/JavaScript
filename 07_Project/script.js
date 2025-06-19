const start = document.getElementById("start");
const stop = document.getElementById("stop");
const body = document.querySelector("body");


let intervalId = null;

start.addEventListener("click", (e) => {

  if (intervalId == null) {

    intervalId = setInterval(() => {

      let red = Math.round(Math.random() * 255);
      let blue = Math.round(Math.random() * 255);
      let green = Math.round(Math.random() * 255)
      
      body.style.backgroundColor = `rgb(${red},${blue},${green})`;

      console.log([red, blue, green]);

    }, 2000);
  }
});


stop.addEventListener('click', () => {
    console.log("Interval stopped")
    clearInterval(intervalId)
    intervalId = null
})
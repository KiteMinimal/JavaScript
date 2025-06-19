// document.getElementById("button")
// button.addEventListener("click", function(e){
//     e.stopPropagation()
//     console.log("clicked on button")
// })

// document.getElementById("images").addEventListener('click', (e) => {
//     console.log("clicked on image ul")
// })

// document.getElementById("owl").addEventListener('click', (e) => {
//     console.log("clicked on owl")
//     e.stopPropagation()
// })

// const callMe = function () {
//   console.log("My Self Shoyeb Stack Developer");
// };

// const changeH1 = function () {
//   document.querySelector("h1").textContent = "Learning ReactJS";
// };
// const clearTime = setTimeout(() => {
//   callMe();
//   changeH1();
// }, 5000);

// const button = document.querySelector('#stop')

// button.addEventListener('click', () => {
//     clearTimeout(clearTime)
// })

const func = function (arg) {
  console.log(arg, Date.now());
};

let intervalId = null

document.querySelector("#start").addEventListener("click", (e) => {
    if(intervalId == null){
        console.log("Interval started")
        intervalId = setInterval(func, 2000, "Cool_Dude");
    }
});

document.querySelector("#stop").addEventListener("click", (e) => {
  clearInterval(intervalId);
  console.log("Interval stopped")
  intervalId = null
});

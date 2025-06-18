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

const callMe = function () {
  console.log("My Self Shoyeb Stack Developer");
};

const changeH1 = function () {
  document.querySelector("h1").textContent = "Learning ReactJS";
};
const clearTime = setTimeout(() => {
  callMe();
  changeH1();
}, 5000);


const button = document.querySelector('#stop')

button.addEventListener('click', () => {
    clearTimeout(clearTime)
})
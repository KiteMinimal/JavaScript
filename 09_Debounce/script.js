// function debounce(fun, delay) {
//     let intervalId;
//     return function(...arg) {
//         clearTimeout(intervalId)
//         intervalId = setTimeout(() => {
//             fun.apply(this, arg)
//         },delay)
//     }
// }

// function inputValue(e) {
//     console.log("Input value:", e.target.value)
// }

// const inputDebounce = debounce(inputValue, 500)

// document.getElementById('input').addEventListener('input', inputDebounce)

function throttle(fn, delay) {
  let lastValue = 0;
  return function (...arg) {
    let now = new Date().getTime();
    setInterval(() => {
      if (now - lastValue >= delay) {
        lastValue = now;
        fn.apply(this, arg);
      }
    }, delay);
  };
}

function scrollTimer() {
  console.log("scrolling time:", Date.now().toLocaleString());
}

const throttleScrollTimer = throttle(scrollTimer, 1000);

window.addEventListener("scroll", throttleScrollTimer);

// document.body.innerHTML = `
// for(let i = 0; i < 10; i++){
//     if(i%2 == 0){
//     <img style="height:200px;" src="https://images.unsplash.com/photo-1743701168213-89acf87d972c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="">
// }
//     else{
//     <img style="height:200px;" src="https://images.unsplash.com/photo-1749741335932-f5295ee9afd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"alt="">
//     }
// }
// `;

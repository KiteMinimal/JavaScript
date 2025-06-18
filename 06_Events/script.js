document.getElementById("button")
button.addEventListener("click", function(e){
    e.stopPropagation()
    console.log("clicked on button")
})

document.getElementById("images").addEventListener('click', (e) => {
    console.log("clicked on image ul")
})

document.getElementById("owl").addEventListener('click', (e) => {
    console.log("clicked on owl")
    e.stopPropagation()
})


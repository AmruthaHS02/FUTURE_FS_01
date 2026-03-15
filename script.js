// Smooth scrolling

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault()

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:'smooth'
})

})

})

// Dark mode toggle

const toggle = document.getElementById("darkToggle")

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark-mode")

})

console.log("Portfolio Loaded Successfully")

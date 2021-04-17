let ball = document.getElementsByClassName("pokeball");
let upperBall = document.getElementById("upper")
console.log('test')
    // Pokemon 
let Charmander = document.getElementById("pokemon-1")
let Charmeleon = document.getElementById("pokemon-2")
let Charzard = document.getElementById("pokemon-3")

for (i in ball) {
    ball[i].addEventListener("mouseenter", function(e) {
        let id = e.target.closest("a").rel
        let target = document.getElementById(id)

        console.log(target)

        target.classList.remove("hide")
        target.classList.remove("effect")
    })

    ball[i].addEventListener("mouseleave", function(e) {
        let id = e.target.closest("a").rel
        let target = document.getElementById(id)

        console.log(target)

        // target.style.zIndex = "50"
        target.classList.add("hide")
        target.classList.add("effect")
    })
}
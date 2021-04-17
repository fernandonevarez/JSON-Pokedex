let ballArray = document.getElementsByClassName("pokeball");

let handArray = document.getElementsByClassName("hands")

console.log('test')
    // Pokemon 
    // let Charmander = document.getElementById("pokemon-1")
    // let Charmeleon = document.getElementById("pokemon-2")
    // let Charzard = document.getElementById("pokemon-3")

for (ball in ballArray) {
    ballArray[ball].addEventListener("mouseenter", function(e) {
        let id = e.target.closest("a").rel
        let imgId = `pokemon-${id}`
        let target = document.getElementById(imgId)

        let handId = `hand-${id}`
        let hand = document.getElementById(handId)
            // hand-1

        hand.classList.remove("hover")

        console.log(handId)
        console.log(imgId)
        console.log(target)

        target.classList.remove("hide")
        target.classList.remove("effect")
    })

    ballArray[ball].addEventListener("mouseleave", function(e) {
        let id = e.target.closest("a").rel
        let imgId = `pokemon-${id}`
        let target = document.getElementById(imgId)

        let handId = `hand-${id}`
        let hand = document.getElementById(handId)

        console.log(target)


        target.classList.add("hide")
        target.classList.add("effect")
        hand.classList.add("hover")
    })
}
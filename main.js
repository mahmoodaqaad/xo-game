let squars = document.querySelectorAll(".square")
let title = document.querySelector(".title h4")
let play = "X"
let oldplay
const Xtag = document.querySelector(".x-res p")
const Otag = document.querySelector(".o-res p")

const reslut = JSON.parse(localStorage.getItem("XO")) || { x: 0, o: 0 }
Xtag.innerHTML = reslut.x
Otag.innerHTML = reslut.o

reslut.x > reslut.o ? Xtag.parentElement.style.color = "green" : reslut.x > reslut.o ? Otag.parentElement.style.color = "green" : ""
squars.forEach((squar, i) => {

    squar.onclick = () => {
        if (play == "X" && squar.textContent == "") {
            squar.textContent = play
            oldplay = "X"
            play = "O"
            title.textContent = `${play} player`
        }
        else if (play == "O" && squar.textContent == "") {
            squar.textContent = play
            play = "X"
            oldplay = "O"
            title.textContent = `${play} player`

        }
        winner()
    }
    function winner() {

        if (squars[0].textContent == squars[1].textContent && squars[1].textContent == squars[2].textContent && squars[1].textContent != "") { good(0, 1, 2) }

        else if (squars[3].textContent == squars[4].textContent && squars[4].textContent == squars[5].textContent && squars[4].textContent != "") { good(3, 4, 5) }

        else if (squars[6].textContent == squars[7].textContent && squars[7].textContent == squars[8].textContent && squars[7].textContent != "") { good(6, 7, 8) }

        //--------------------


        else if (squars[0].textContent == squars[3].textContent && squars[3].textContent == squars[6].textContent && squars[3].textContent != "") { good(0, 3, 6) }

        else if (squars[1].textContent == squars[4].textContent && squars[4].textContent == squars[7].textContent && squars[4].textContent != "") { good(1, 4, 7) }

        else if (squars[2].textContent == squars[5].textContent && squars[5].textContent == squars[8].textContent && squars[5].textContent != "") { good(2, 5, 8) }

        //----------------------------

        else if (squars[0].textContent == squars[4].textContent && squars[4].textContent == squars[8].textContent && squars[8].textContent != "") { good(0, 4, 8) }
        else if (squars[2].textContent == squars[4].textContent && squars[4].textContent == squars[6].textContent && squars[6].textContent != "") { good(2, 4, 6) }
        else if (squars[0].textContent != "" && squars[1].textContent != "" && squars[2].textContent != "" && squars[3].textContent != "" && squars[4].textContent != "" && squars[5].textContent != "" && squars[6].textContent != "" && squars[7].textContent != "" && squars[8].textContent != "") {

            bad()
        }
    }
})

function good(one, tow, three) {
    squars[one].style.backgroundColor = "rgb(78 141 207)"
    squars[tow].style.backgroundColor = "rgb(78 141 207)"
    squars[three].style.backgroundColor = "rgb(78 141 207)"
    squars[one].style.scale = "1.1"
    squars[tow].style.scale = "1.1"
    squars[three].style.scale = "1.1"
    squars[one].style.color = "white"
    squars[tow].style.color = "white"
    squars[three].style.color = "white"
    document.querySelector(".boxs").style.pointerEvents = "none"
    title.style.fontSize = "40px"
    title.textContent = oldplay + " is winner"


    const resultX = reslut.x
    const resultO = reslut.o
    const newResult = {
        x: oldplay === "X" ? resultX + 1 : resultX,
        o: oldplay === "O" ? resultO + 1 : resultO

    }
    localStorage.setItem("XO", JSON.stringify(newResult))
    setInterval(() => {
        title.textContent += " ."
    }, 500);
    setTimeout(() => {
        location.reload()
    }, 2000);
}

function bad() {
    title.textContent = "NO ONE IS WIN"
    setInterval(() => {
        title.textContent += " ."
    }, 500);
    setTimeout(() => {
        location.reload()
    }, 1900);
} 

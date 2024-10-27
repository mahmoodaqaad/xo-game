let squars = document.querySelectorAll(".square")
let title = document.querySelector(".title h4")
let play = "X"
let oldplay
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
const div = document.querySelectorAll("div")
const timer = document.querySelector("h1")
const button = document.querySelector("button")

button.onclick=()=>{
function update() {
    timer.innerText = 0
    const interval = setInterval(() => {
        timer.innerText++;
        console.log(timer.innerText)
        div[0].style.backgroundColor = "red"
        if (timer.innerText >= 5) {
            clearInterval(interval)
            timer.innerText = 0
            div[0].style.backgroundColor = "gray"
            div[1].style.backgroundColor = "yellow"
            const interval2 = setInterval(() => {
                timer.innerText++;
                console.log(timer.innerHTML)
                if (timer.innerHTML >= 3) {
                    clearInterval(interval2)
                    timer.innerHTML = 0
                    div[1].style.backgroundColor = "gray"
                    div[2].style.backgroundColor = "green"
                    const interval3 = setInterval(() => {
                        timer.innerHTML++;
                        console.log(timer.innerHTML)
                        if (timer.innerHTML >= 5) {
                            clearInterval(interval3)
                            timer.innerHTML=0
                            div[2].style.backgroundColor = "gray"
                            div[1].style.backgroundColor = "yellow"
                            const interval4 = setInterval(() => {
                                timer.innerText++;
                                console.log(timer.innerHTML)
                                if (timer.innerHTML >= 3) {
                                    clearInterval(interval4)
                                    div[1].style.backgroundColor = "gray"
                                    div[0].style.backgroundColor = "red"
                                    update()
                                }
                            }, 1000);
                                }
                            }, 1000);
                        }
                    }, 1000);
                }
            }, 1000)
        }
        update()
    }
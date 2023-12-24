const timeEl = document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")

/* func เพื่อแสดงเวลา */
function setTime() {
    const time = new Date()
    const hrs = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()
    timeEl.innerHTML = `${hrs}
                       :${min < 10 ? `0${min}` : min}
                       :${sec < 10 ? `0${sec}` : sec}`
}

btnToggle.addEventListener("click", (e) => {
    console.log("switch mode")
    
    const html = document.querySelector('html')
    if(html.classList.contains("dark")) {
        html.classList.remove("dark")
        e.target.innerHTML = "Dark Mode"
    }
    else{
        html.classList.add("dark")
        e.target.innerHTML = "Light Mode"
    }
})

setTime()
setInterval(setTime, 1000)
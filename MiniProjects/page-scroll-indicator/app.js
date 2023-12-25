window.onscroll = () => scrollProgress()

const progressEl = document.querySelector(".progress")

function scrollProgress() {

    /* แปลงความยาวของหน้าเพจเป็น % , 0 - 1*/
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercent = (scrollTop / pageHeight) * 100
    //console.log(scrollPercent + "%")
    progressEl.style.visibility = "visible"
    progressEl.style.width = scrollPercent + "%"
}
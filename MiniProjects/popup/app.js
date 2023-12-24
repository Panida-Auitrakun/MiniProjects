const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const modalContainer = document.querySelector(".modal-container")

openBtn.addEventListener("click", () => {
    modalContainer.classList.add("show")
    /* .add ทำการเพิ่ม class = show เพื่อแสดง popup */
})

closeBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show")
    /* .remove ทำการลบ class = show เพื่อปิด popup */
})

/* step by step
    1.คลิกปุ่ม details ใน section class container 
      จะมีการเพิ่ม class show
    2.เมื่อคลิกปุ่ม close จะทำการนำ class show ออกจาก
      section class container*/
/* สร้างตัวแปรเพื่ออ้างอิงไปยัง class='btn' */
const btn = document.querySelector(".btn");
/* สร้างตัวแปรเพื่ออ้างอิงไปยัง class='coupon */
const coupon = document.querySelector(".coupon");

/* ดักจับอีเวนท์เพื่อดูว่าคนที่เข้ามาชมหน้าเว็บมีการกดปุ่ม copy? */
btn.addEventListener("click", (e) => {
    //console.log("start copy")
    coupon.select()
    coupon.setSelectionRange(0,99999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent="Successfully copied"
    /* set timeout 5 sec เพื่อเปลี่ยนข้อความจาก Successfully copied => Copy */
    setTimeout(() => {
        btn.textContent="Copy"
    }, 5000)
})


/* กระบวนการทำงาน
    1.คลิกปุ่ม copy
    2.ดึงข้อความที่อยู่ในตัวแปร coupon 
      โดยตัวแปร coupon อ้างอิงไปที่ input type='text' class='coupon' 
      ทำการ copy to clipboard โดยใช้คำสั่ง navigator.clipboard.writeText(coupon.value)
    3.เมื่อทำการคัดลอกแล้วจะมีการบอกสถานะว่า 'คัดลอกเรียบร้อยแล้ว' */
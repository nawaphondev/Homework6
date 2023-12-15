// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0

const counter = document.querySelector(".counter");
const numberDisplay = document.querySelector(".number");
const incButton = document.querySelector(".btn-inc");
const decButton = document.querySelector(".btn-dec");
const clrButton = document.querySelector(".btn-clr");

let count = 0;

function updateNumber() {
  numberDisplay.textContent = count;
}

function increment() {
  if (count < 9) {
    count++;
    updateNumber();
  }
}

function decrement() {
  if (count > 0) {
    count--;
    updateNumber();
  }
}

function reset() {
  count = 0;
  updateNumber();
}

// เพิ่ม event listener สำหรับปุ่มต่าง ๆ
incButton.addEventListener("click", increment);
decButton.addEventListener("click", decrement);
clrButton.addEventListener("click", reset);

// อัปเดตค่าเริ่มต้น
updateNumber();

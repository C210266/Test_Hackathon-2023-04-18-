// Bai3
let year = +prompt("Nhap nam");
let month = +prompt("Nhap thang");

let day31 = [1, 3, 5, 7, 8, 10, 12];
let day30 = [4, 6, 9, 11];
for (let i of day31) {
  if (month == i) {
    alert("so ngay trong thang do la 31");
  }
}
for (let i of day30) {
  if (month == i) {
    alert("so ngay trong thang do la 30");
  }
}
if (month === 2) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    alert("so ngay trong thang do la 29");
  } else {
    alert("so ngay trong thang do la 28");
  }
}


// Bai2

function Check(arr) {
  let arr2 = arr.split(" ");
  let arr3 = arr2.filter((item) => item !== "");
  for (let i = 0; i < arr3.length; i++) {
    arr3[i] = arr3[i].toLowerCase();
    arr3[i] = arr3[i][0].toUpperCase() + arr3[i].substring(1);
  }
    return arr3.join(" ");
}

let obj = "   heLlo riKkei  academy ";
console.log(Check(obj));

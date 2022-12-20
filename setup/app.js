const incr = document.querySelector(".incr-btn");
const decr = document.querySelector(".decr-btn");
const reset = document.querySelector(".reset-btn");
const value = document.querySelector(".value");
// increment counter
let x = 0;
value.textContent = x;

incr.addEventListener("click", function () {
  x = x + 1;
  console.log(x);
  value.textContent = x;
  value.style.color = "blue";
});
decr.addEventListener("click", function () {
  x = x - 1;
  console.log(x);
  value.textContent = x;
  value.style.color = "red";
});
reset.addEventListener("click", function () {
  x = 0;
  console.log(x);
  value.textContent = x;
});

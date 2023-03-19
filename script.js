"use strict";
const passIn = document.querySelector(".pass_in");
const btn = document.querySelector(".btn-submit");

let pass_len;

//pass checking
const checker = function (e) {
  pass_len = e.target.value.length;
};

passIn.addEventListener("input", (e) => checker(e));

btn.addEventListener("mouseover", function () {
  // console.log(this);
  if (!this) return;
  if (pass_len < 8) {
    const parentWidth = this.parentElement.offsetWidth;
    const elementWidth = this.offsetWidth;
    const style = window.getComputedStyle(this);
    const right = parseInt(style.marginRight.slice(0, -2));
    const left = parseInt(style.marginLeft.slice(0, -2));

    const value = parentWidth - elementWidth - 100 + "px";

    if (!right || !left) {
      this.style.marginLeft = value;
    }
    if (right > left) {
      this.style.marginRight = "0px";

      this.style.marginLeft = value;
    }
    if (left > right) {
      this.style.marginLeft = "0px";

      this.style.marginRight = value;
    }
  }
});

// //BTn running function
// const btnRunner = function (password) {
//   console.log(this);
//   if (!this) return;
//   if (password < 8) {
//     const parentWidth = this.parentElement.offsetWidth;
//     const elementWidth = this.offsetWidth;
//     const style = window.getComputedStyle(this);
//     const right = parseInt(style.marginRight.slice(0, -2));
//     const left = parseInt(style.marginLeft.slice(0, -2));

//     const value = parentWidth - elementWidth - 100 + "px";

//     if (!right || !left) {
//       this.style.marginLeft = value;
//     }
//     if (right > left) {
//       this.style.marginRight = "0px";

//       this.style.marginLeft = value;
//     }
//     if (left > right) {
//       this.style.marginLeft = "0px";

//       this.style.marginRight = value;
//     }
//   }
// };

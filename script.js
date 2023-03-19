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

  //Data Collection

  const parentWidth = this.parentElement.offsetWidth;
  const elementWidth = this.offsetWidth;
  const style = window.getComputedStyle(this);
  const right = parseInt(style.marginRight.slice(0, -2));
  const left = parseInt(style.marginLeft.slice(0, -2));

  const value = parentWidth - elementWidth - 100 + "px";

  //funcs

  if (pass_len < 8) {
    if (!right || !left) {
      this.style.marginLeft = value;
    }
    if (right > left) {
      btn.style.marginRight = "0px";
      btn.style.marginLeft = value;
    }
    if (left > right) {
      btn.style.marginLeft = "0px";
      btn.style.marginRight = value;
    }
  }
});

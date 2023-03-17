"use strict";
const passIn = document.querySelector(".pass_in");
const btn = document.querySelector(".btn-submit");

const num = "abcdabc";
let pass_len = num.length;

const checker = function (num) {};
btn.addEventListener("mouseover", function () {
  //   console.log(pass_len);
  if (pass_len < 8) {
    const parentWidth = this.parentElement.offsetWidth;
    const elementWidth = this.offsetWidth;
    const style = window.getComputedStyle(this);
    console.log(parentWidth, elementWidth);
    console.log(style.marginRight);

    // const value = parentWidth - elementWidth - 100 + "px";
    // console.log(value);
    // this.style.marginLeft = value;
  }
});

passIn.addEventListener("input", (e) => checker(e));

"use strict";
// const srt = "Hello";
// console.log(srt);
function createAnimation(id, animation, timingFunc = "ease", duration, interCount) {
    //   const elem = document.querySelector(`#${id}`) as HTMLElement;
    //   if (elem) {
    console.log(`${animation} ${timingFunc} ${duration} ${interCount}`);
    // elem.style.animation = `${animation} ${timingFunc} ${duration} ${interCount}`;
    //   }
}
createAnimation("id", "fade", "ease-out", 3000, "infinite");

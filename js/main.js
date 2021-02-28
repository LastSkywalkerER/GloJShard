'use strict';

const moveObj = () => {
  const obj = document.querySelector('.wrapper');

  let start = 0;

  const moveAnimationRirght = () => {
    start += 10;

    obj.style.transform = `translateX(${start}px)`;
    if (start < 500) {
      window.requestAnimationFrame(moveAnimationRirght);
    } else {
      window.requestAnimationFrame(moveAnimationLeft);
    }
  };

  const moveAnimationLeft = () => {
    start -= 10;

    obj.style.transform = `translateX(${start}px)`;
    if (start > 0) {
      window.requestAnimationFrame(moveAnimationLeft);
    } else {
      window.requestAnimationFrame(moveAnimationRirght);
    }
  };

  window.requestAnimationFrame(moveAnimationRirght);
};

moveObj();
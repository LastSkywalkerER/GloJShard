'use strict';



const moveObj = () => {
  const obj = document.querySelector('.wrapper'),
    play = document.querySelector('.play'),
    reset = document.querySelector('.reset');

  let start = 0,
    animation = false,
    direction = 'right';

  const moveAnimationRirght = () => {
    start += 5;
    direction = 'right';

    obj.style.transform = `translateX(${start}px)`;
    if (start < 500) {
      window.requestAnimationFrame(moveAnimationRirght);
    } else {
      window.requestAnimationFrame(moveAnimationLeft);
    }
  };

  const moveAnimationLeft = () => {
    start -= 5;
    direction = 'left';

    obj.style.transform = `translateX(${start}px)`;
    if (animation) {
      if (start > 0) {
        window.requestAnimationFrame(moveAnimationLeft);
      } else {
        window.requestAnimationFrame(moveAnimationRirght);
      }
    }
  };

  play.addEventListener('click', () => {
    if (!animation) {
      animation = true;
      if (direction === 'right') {
        window.requestAnimationFrame(moveAnimationRirght);
      } else {
        window.requestAnimationFrame(moveAnimationLeft);
      }
    } else {
      animation = false;
    }
  });

  reset.addEventListener('click', () => {
    start = 0;
    obj.style.transform = `translateX(${start}px)`;
  });
};


moveObj();
'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'.italics(), 'Воскресенье'.italics()],
  date = new Date();

for (let key in week) {
  if (key == date.getDay() - 1) {
    document.write(week[key].bold());
  } else {
    document.write(week[key]);
  }
  document.write('<br>');
  console.log(typeof week[key]);
}
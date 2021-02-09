'use strict';

function updateTime() {

  const date = new Date(),
    week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'.italics(), 'Воскресенье'.italics()],
    month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  function declination(number, oneCase, twoCase, threeCase) {
    number = String(number);
    switch (number) {
      case ('11'):
        return threeCase;
      case ('12'):
        return threeCase;
      case ('13'):
        return threeCase;
      case ('14'):
        return threeCase;
    }
    switch (number[number.length - 1]) {
      case ('1'):
        return oneCase;
      case ('2'):
        return twoCase;
      case ('3'):
        return twoCase;
      case ('4'):
        return twoCase;
      default:
        return threeCase;
    }
  }

  function addZero(number) {
    number = String(number);
    if (number.length === 1) {
      return '0' + number;
    }
    return number;
  }

  document.write('Сегодня ' + week[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + date.getHours() + declination(date.getHours(), ' часа ', ' часа ', ' часов ') + date.getMinutes() + declination(date.getMinutes(), ' минута ', ' минуты ', ' минут ') + date.getSeconds() + declination(date.getSeconds(), ' секунда ', ' секунды ', ' секунд '));

  document.write('<br>');

  document.write(addZero(date.getDate()) + '.' +
    addZero(date.getMonth() + 1) + '.' + date.getFullYear() + ' - ' + addZero(date.getHours()) + '.' + addZero(date.getMinutes()) + '.' + addZero(date.getSeconds()));

  document.close();

}

setInterval(updateTime, 1000);
'use strict';

let lang = prompt('ru или en?');
const month = [
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

const reducer = (accumulator, currentValue) => console.log(currentValue);

if (lang === 'ru') {
  month[0].reduce(reducer, '');
} else if (lang === 'en') {
  month[1].reduce(reducer, '');
}

switch(lang) {
  case ('ru'):
    month[0].reduce(reducer, '');
    break;
  case ('en'):
    month[1].reduce(reducer, '');
    break;
}

month[(lang === 'ru') ? 0 : 1].reduce(reducer, '');

let namePerson = prompt('Введите имя');

namePerson === 'Артем' ? console.log('директор') : (namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент'))
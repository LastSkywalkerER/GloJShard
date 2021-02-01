let num = 266219;
let numMult = 1;

num = String(num);
for (let i = 0; i < num.length; i++) {
  numMult *= Number(num[i]);
};

console.log(numMult);

console.log(Number(String(numMult ** 3).substr(0, 2)));

let lang = prompt('ru или en?');
let month = [
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

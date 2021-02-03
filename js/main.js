'use strict';

let arr = ['23542356', '242356653', '5643652', '312415234', '463574', '7672561', '235412523456'];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === '2' || arr[i][0] === '4') console.log(arr[i]);
}

for (let i = 2; i < 100; i++) {
  let index = 0;
  for (let j = 2; j < Math.floor(Math.sqrt(i)) + 1; j++) {
    if (i % j === 0) index++;
  }
  if (!index) console.log('Число ' + i + ' простое, его делители: 1 и ' + i);
}
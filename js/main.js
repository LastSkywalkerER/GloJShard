let num = 266219;
let numString = String(num);
let numArray = numString.split('');
let numMult = 1;

for (let i = 0; i < numString.length; i++) {
  numMult *= Number(numArray[i]);
};

console.log(numMult);

let numPow = numMult ** 3;

for (let i = 0; i < 2; i++) {
  console.log(Number(String(numPow).split('')[i]));
};


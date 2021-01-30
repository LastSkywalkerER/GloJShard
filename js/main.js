let num = 266219;
let numMult = 1;

for (let i = 0; i < String(num).length; i++) {
  numMult *= Number(String(num)[i]);
};

console.log(numMult);

let numPow = numMult ** 3;

console.log(Number(String(numPow).substr(0, 2)));



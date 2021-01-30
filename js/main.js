let num = 266219;
let numMult = 1;

num = String(num);
for (let i = 0; i < num.length; i++) {
  numMult *= Number(num[i]);
};

console.log(numMult);

console.log(Number(String(numMult ** 3).substr(0, 2)));



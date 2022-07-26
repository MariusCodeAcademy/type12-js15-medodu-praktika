'use strict';
console.log('main.js');

const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];

// 1. rasti didziausia skaiciu su reduce

const didziausias = numbers.reduce((maxSk, sk) => Math.max(maxSk, sk), numbers[0]);
console.log('didziausias ===', didziausias);

// 2. Sukurkite ir atvaizduokite masyvą su dvigubomis reikšmėmis;

// 3. Sukurkite ir atvaizduokite masyvą su reikšmėmis padaugintomis iš jų vietos masyve indekso
const multiplyByIdxArr = (sk, idx) => sk * idx;

const multiplyByIdxAnonym = function (sk, idx) {
  return sk * idx;
};
// debugger;
const reiksmesPadaugintosIdx = numbers.map(multiplyByIdxArr); //

function multiplyByIdx(sk, idx) {
  return sk * idx;
}

console.log('reiksmesPadaugintosIdx ===', reiksmesPadaugintosIdx);

// 4. I nauja masyva atrinkti vertes didesnes uz 3

// 5. grazinti nauja masyva su Suapvalintom reikšmem iki sveikų skaičių

// 6. Atrinkti kas antrą elementą į naują masyvą(ne su for i)
const everySecondEl = numbers.filter((sk, idx) => idx % 2 === 0);
console.log('everySecondEl ===', everySecondEl);
console.log('numbers ===', numbers);

// 7. Grazinti nauja masyva kuriame yra objektai
// [
//   {index: 0, reiksme: 1}
//   {index: 1, reiksme: 2}
//    ...
// ]

const objArr = numbers.map((reiksme, index) => {
  return {
    index,
    reiksme,
  };
});
// const objArr = numbers.map((reiksme, index) => ({index, reiksme}));
console.log('objArr ===', objArr);


// 8. sukurti funkcija generateRandomArr(lenght, min, max)
// pagaminti random masyva kuriame butu tiek nariu kiek yra length, 
// ir ju reikmess butu nuo min iki max suapvalinto iki 2sk po kablelio
// generateRandomArr(10, -50, 100)
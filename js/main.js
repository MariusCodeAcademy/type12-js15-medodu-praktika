'use strict';
console.log('main.js');

const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];

// 1. rasti didziausia skaiciu su reduce

const didziausias = numbers.reduce((maxSk, sk) => Math.max(maxSk, sk), numbers[0]);
console.log('didziausias ===', didziausias);
// 2. Sukurkite ir atvaizduokite masyvą su dvigubomis reikšmėmis;

// 3. Sukurkite ir atvaizduokite masyvą su reikšmėmis padaugintomis iš jų vietos masyve indekso

// 4. I nauja masyva atrinkti vertes didesnes uz 3

// 5. grazinti nauja masyva su Suapvalintom reikšmem iki sveikų skaičių

// 6. Atrinkti kas antrą elementą į naują masyvą(ne su for i)

// 7. Grazinti nauja masyva kuriame yra objektai
// [
//   {index: 0, reiksme: 1}
//   {index: 1, reiksme: 2}
//    ...
// ]

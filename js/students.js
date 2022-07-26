const students = [
  {
    name: 'James',
    gender: 'male',
    age: 25,
    town: 'Vilnius',
    hasCar: true,
  },
  {
    name: 'Jill',
    gender: 'female',
    age: 28,
    town: 'Kaunas',
    hasCar: true,
  },
  {
    name: 'Mike',
    gender: 'male',
    age: 18,
    town: 'Kaunas',
    hasCar: false,
  },
  {
    name: 'Jane',
    gender: 'female',
    age: 22,
    town: 'Klaipeda',
    hasCar: false,
  },
  {
    name: 'Jannet',
    gender: 'female',
    age: 29,
    town: 'Klaipeda',
    hasCar: true,
  },
  {
    name: 'Cory',
    gender: 'male',
    age: 30,
    town: 'Siauliai',
    hasCar: true,
  },
  {
    name: 'Minks',
    gender: 'male',
    age: 19,
    town: 'Siauliai',
    hasCar: false,
  },
];

// taikomes
const appEl = document.getElementById('app');
const filterSelectEl = document.getElementById('towns');

// st1. sugeneruoti studentu nerikiuota sarasa htmle kuriame butu studentu vardai
// const ulEl = document.createElement('ul');
// students.forEach((stObj) => {
//   const liEl = document.createElement('li');
//   liEl.textContent = stObj.name;
//   ulEl.append(liEl)
// })


// const tikslas = "<li>James</li><li>Jill</li><li>Mike</li><li>Jane</li><li>Jannet</li><li>Cory</li><li>Minks</li>"

// const mappedValues = students.map((stObj) => `<li>${stObj.name}</li>`).join('')
// console.log('mappedValues ===', mappedValues);
// ulEl.insertAdjacentHTML('afterbegin', mappedValues)

// appEl.append(ulEl)

function generateList(arr, listType = 'ul') {
  // issivalom konteineri 
  appEl.innerHTML = ''
  const ulEl = document.createElement(listType === 'ol' ? 'ol' : 'ul');
  const mappedValues = arr.map((stObj) => `<li>${stObj.name}, -- ${stObj.town} </li>`).join('')
  ulEl.insertAdjacentHTML('afterbegin', mappedValues)
  appEl.append(ulEl)
}
generateList(students, 'ol')
generateList(getStudentsFrom('Vilnius'), 'ol')


// st1.1 parasyti funkcija kuri atlieka [st1]

// st2. Parasyti funkcija, kuriai paduodam miesta kaip argumenta ir ji atrenka/grazina studentus is to miesto
function getStudentsFrom(town) {
  return students.filter((stObj) => stObj.town.toLowerCase() === town.toLowerCase())
}
const kaunas =  getStudentsFrom('Kaunas')
console.log('kaunas ===', kaunas);

// st2.1 padaryti kad veiktu filtras
filterSelectEl.addEventListener('change', (e) => {
  console.log('filterSelectEl change', e.target.value);
  const selectedTown = e.target.value
  generateList(getStudentsFrom(selectedTown))

})
// st3. Parasyti funkcija, kuriai paduodam amziu kaip argumenta ir ji atrenka studentus kuriu amzius didesnis uz argumenta.

// st4. sukurti funkcija kuri sukuria ir prideda kiekvienam li elementui button <button>delete</button>

// st4.1 delete paspaudimo metu istrinti studenta is saraso
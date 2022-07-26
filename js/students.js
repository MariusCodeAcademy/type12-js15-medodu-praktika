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

// st1. sugeneruoti studentu nerikiuota sarasa htmle kuriame butu studentu vardai
const ulEl = document.createElement('ul');
students.forEach((stObj) => {
  const liEl = document.createElement('li');
  liEl.textContent = stObj.name;
  ulEl.append(liEl)
})


const mappedValues = "<li>James</li><li>Jill</li><li>Mike</li><li>Jane</li><li>Jannet</li><li>Cory</li><li>Minks</li>"

appEl.append(ulEl)



// st1.1 parasyti funkcija kuri atlieka [st1]

// st2. Parasyti funkcija, kuriai paduodam miesta kaip argumenta ir ji atrenka/grazina studentus is to miesto

// st3. Parasyti funkcija, kuriai paduodam amziu kaip argumenta ir ji atrenka studentus kuriu amzius didesnis uz argumenta.

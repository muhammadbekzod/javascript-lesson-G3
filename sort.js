const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },

];

// Sort by name
//Sort by mass
// sort by height
// sort by gender


// const byMass = characters.sort((a, b) => {
//     return b.mass - a.mass;
// })

// console.log(byMass);

// const byHeight = characters.sort((a, b) => {
//     return a.height - b.height;
// })
// console.log(byHeight);

// const byName = characters.sort((a, b) => {
//     if (a.name < b.name) return 1;
//     return -1;
// })

// console.log(byName);


const byGender = characters.sort((a, b) => {
    if (a.gender === 'female') return -1;
    return 1;
})
console.log(byGender);
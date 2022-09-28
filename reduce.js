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


// const allMass = characters.reduce((acc, curr) => {
//     return acc + curr.mass;
// }, 0)

// console.log(allMass)

// const allHeight = characters.reduce((acc, curr) => {
//     return acc + curr.height;
// }, 0);

// console.log(allHeight)

// const byEyeColor = characters.reduce((acc, curr) => {
//     const color = curr.eye_color;
//     if (acc[color]) {
//         acc[color]++ //+1
//     } else {
//         acc[color] = 1;
//     }
//     return acc;
// }, {})
// console.log(byEyeColor)

const totalNameCharacter = characters.reduce((acc, curr) => {
    return acc + curr.name.length
}, 0)
console.log(totalNameCharacter)
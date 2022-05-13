const square = (num) => {
    return num * num;
}
console.log(square(2));

const numbers = [1, 2, 3, 4, 5, 6];
let isEven = numbers.filter((number) => {
    if (number % 2 === 0) {
        return number;
    }
})
console.log("even number", isEven);

const persons = [
    {
        name: "rakshith",
        age: 36
    },
    {
        name: "rohith",
        age: 21
    },
    {
        name: 'rohan',
        age: 25
    }
];

let getAge = persons.filter((person) => {
    return person.age > 25
})

console.log("age is ", getAge);
// 1.find person age greater than 21
// 2. print that person name

// let getPerson = persons.filter((person, index) => {
//     if (person.age > 21) {
//         return person.name
//     }
// })

// getPerson.forEach((person, index) => {
//     console.log("person is ", getPerson[index].name);

// }
// )

let person = persons.find((per)=>
{
    return per.age === 21
}
)

console.log(person.name);
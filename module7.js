const person = {
    name: 'John ',
    age: 30
};

function printInfo() {
    console.log(`Name: ${this.name}, Age:${this.age}`);
}
printInfo.call(person);












function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b !== 0) {
                return a / b;
            } else {
                return "Ошибка: деление на ноль";
            }
        default:
            return "Ошибка: неверный оператор";
    }
}

const params = {
    a: 2,
    b: 3,
    operator: "+"
};

const result = calculate.apply(null, [params.a, params.b, params.operator]);

console.log(result);






const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 15 },
    { name: "Eve", age: 22 }
];


const adults = users.filter(user => user.age >= 18);


const names = adults.map(user => user.name);


console.log(adults); 
console.log(names);
 





const person1 = {
    firstName: "Alice",
    lastName: "Johnson",
    fullName: ""
};

function setFullName(fullName) {
    this.fullName = fullName;
}

const setPersonFullName = setFullName.bind(person1);
setPersonFullName("John Smith");
console.log(person1.fullName);




function getUniqueSortedNumbers(arr) {
    const uniqueNumbers = new Set(arr);
    return Array.from(uniqueNumbers).sort((a, b) => a - b);
}

const numbers = [5, 3, 8, 1, 3, 5, 2, 8, 9];
const uniqueSortedNumbers = getUniqueSortedNumbers(numbers);

console.log(uniqueSortedNumbers)
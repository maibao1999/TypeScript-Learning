var sum3 = function (x, y) {
    return x + y;
};
console.log('>>> The result 3 is ', sum3(5, 10));
////////////////////////
const sum = (x, y) => {
    return x + y;
}

console.log('>>> Result is ', sum(5, 10))

// Need to validate the input
const sum2 = (x, y) => {
    return x + y;
}

console.log('>>> The result 2 is ', sum2('Bao', 6))

let count = 10
count = 'Bao'
console.log(count);
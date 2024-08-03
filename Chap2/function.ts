//basic function 
function sum(a: number, b: number) {
    return a + b;
}

console.log('>>> Check sum ', sum(5, 10));

// arrow function 
let sum2 = (a: number, b: number) => {
    return a + b;
}
console.log('>>> Check sum2 ', sum2(5, 6));

////
const sum3 = (x: number, y: number) => {
    return x - y;
}

console.log('Check value', sum3(10, 5));




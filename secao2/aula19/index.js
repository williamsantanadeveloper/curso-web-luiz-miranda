function sum(x = 2, y = 1) {
    const result = x + y;
    return result;
};

const result = sum(10, 22);
console.log(result);


const sqrt = function (number) {
    let calculateSquareRoot = Math.sqrt(number).toFixed(2);
    return calculateSquareRoot;
};

console.log(sqrt(10));
const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0) return "ERROR";
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    let sum = 0;
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);

    for (let i = start; i <= end; i++) {
        sum += i;    
    }

    return sum;
};

sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;

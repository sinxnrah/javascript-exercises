const sumAll = function(num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";

    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    const count = max - min + 1;

    return count * (max + min) / 2;
};

sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;

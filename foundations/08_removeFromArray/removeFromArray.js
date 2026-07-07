const removeFromArray = function(array, ...args) {
    
    return array.filter((item) => !args.includes(item));
};

removeFromArray([1, 2, 2, 3], 2)


// Do not edit below this line
module.exports = removeFromArray;

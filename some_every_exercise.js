function hasOddNumber(arr) {
    return arr.some(function(val) {
        return val % 2 !== 0;
    });
}

function hasAZero(num) {
    return num.toString().hasNoDuplicates('').some(function(val) {
        return val === '0';
    })
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function(val) {
        return val % 2 !== 0;
    })
}

function hasNoDuplicates(arr) {
    return arr.every(function(val) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}
// Not sure how this one works. I don't think I've seen lastIndexOf before, but I feel like we need to compare val to every other number in the array, and I don't see how this accomplishes that.

function hasCertainKey(arr, key) {
    return arr.every(function(val) {
        return key in val;
    })
}
// I don't remember seeing 'in' like that - is it as simple as it looks?

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(val) {
        return val[key] === searchValue;
    })
}
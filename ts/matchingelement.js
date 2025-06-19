//How do you total all of the matching integer elements in an array?
//Count the occurrences of each number.
//Keep only numbers that appear more than once.
//Sum those numbers (as many times as they appear).
//eg.[2,3,4,5,6,2,3,5]=ans:10
function sumOfMatchingElements(arr) {
    var countMap = {};
    // Count occurrences
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        countMap[num] = (countMap[num] || 0) + 1;
    }
    // Sum only numbers that occur more than once
    var total = 0;
    for (var num in countMap) {
        var count = countMap[num];
        if (count > 1) {
            total += parseInt(num) * count;
        }
    }
    return total;
}
console.log(sumOfMatchingElements([1, 5, 3, 5, 4, 3, 3]));

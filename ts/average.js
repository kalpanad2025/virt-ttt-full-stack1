//How do you find the average of numbers in a list?
function Average(numbers) {
    if (numbers.length === 0)
        return undefined; // Avoid division by zero
    var sum = numbers.reduce(function (total, num) { return total + num; }, 0);
    return sum / numbers.length;
}
// Test
console.log(Average([15, 23, 40]));

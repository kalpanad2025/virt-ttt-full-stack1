function groupStudentCourses(csvLines) {
    var entries = [];
    // Custom recursive flatten function to handle deeply nested arrays
    function flatten(input) {
        var result = [];
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var item = input_1[_i];
            if (Array.isArray(item)) {
                result.push.apply(result, flatten(item));
            }
            else if (item != null) {
                result.push(String(item));
            }
        }
        return result;
    }
    for (var _i = 0, csvLines_1 = csvLines; _i < csvLines_1.length; _i++) {
        var line = csvLines_1[_i];
        try {
            var rawName = line[0], rest = line.slice(1);
            var name_1 = String(rawName).trim();
            var courses = flatten(rest);
            entries.push([name_1, courses]);
        }
        catch (_a) {
            // optional catch binding – ignore lines that cause errors
        }
    }
    return Object.fromEntries(entries); // ES2019+ required
}
var data = [
    [" Anitha ", "DS", ["ED"]],
    ["Raja", ["DAA", "Math"], "PE"],
    ["  Arun ", [["PYTHON"]]],
    ["Daniel"], // No courses
    ["swetha", ["CS", ["Math", "AI"]]],
    ["..no..", undefined] // Will be handled safely
];
console.log(groupStudentCourses(data));
//output
//--------------------------------------
//D:\TECH\virt-ttt-full-stack1\ts>node dist/10.multiplecsv.js
//{
//Anitha: [ 'DS', 'ED' ],
//Raja: [ 'DAA', 'Math', 'PE' ],
//Arun: [ 'PYTHON' ],
// Daniel: [],
//swetha: [ 'CS', 'Math', 'AI' ],
// '..no..': []
//}

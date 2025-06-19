//How do you find the non-matching characters in a string?
//let a:string;
//let b:string;
function getNonMatchingChars(str, charToExclude) {
    return str.split('').filter(function (c) { return c !== charToExclude; });
}
console.log(getNonMatchingChars("virtusa", "v"));
//output  [ 'v', 'i', 't', 'u', 's', 'a' ]

//How do you calculate the number of vowels and consonants in a string?
function countVowelsConsonants(str) {
    var vowelsList = "aeiou";
    var vowels = 0;
    var consonants = 0;
    var lowerStr = str.toLowerCase();
    for (var i = 0; i < lowerStr.length; i++) {
        var char = lowerStr[i];
        if (char >= "a" && char <= "z") {
            if (vowelsList.indexOf(char) !== -1) {
                vowels++;
            }
            else {
                consonants++;
            }
        }
    }
    return { vowels: vowels, consonants: consonants };
}
console.log(countVowelsConsonants("Friendship"));

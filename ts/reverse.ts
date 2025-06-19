function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
const original = "kalpana";
const reversed = reverseString(original);
console.log(reversed);
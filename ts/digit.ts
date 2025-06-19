function countDigit(str: string): number {
  const digits = str.match(/\d/g); // \d=>to identify the digit 0–9,g  for global search
  return digits ? digits.length : 0;  //ternary operator expression if digit=null return 0 ,not retrun =length of the digit
}

console.log(countDigit("virtusa12345"));      
console.log(countDigit("India"));   
console.log(countDigit("In34dia1"));  
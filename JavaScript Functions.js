function multiply(a, b, c) {
  if (a === b || b === c || a === c) {
    return "Error: All numbers must be different.";
  }
  return a * b * c;
}

const convertToSeconds = function(minutes) {
  return minutes * 60;
};

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(multiply(2, 3, 4));         
console.log(convertToSeconds(5));         
console.log(fahrenheitToCelsius(100));   
console.log(reverseString("hello"));     
console.log(countVowels("Javascript"));   
console.log(isPrime(2));                  
console.log(isPrime(9));                  
console.log(isPrime(13));                 
console.log(isPrime(25));                


function multiply(a, b, c) {
  if (a === b || b === c || a === c) {
    return "Error:  must not be the same number.";
  }
  return a * b * c;
}


console.log(multiply(2, 3, 4)); 


const convertToSeconds = function(minutes) {
  return minutes * 60;
};


console.log(convertToSeconds(5)); 



function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}


console.log(fahrenheitToCelsius(100));


function reverseString(str) {
  return str.split('').reverse().join('');
}


console.log(reverseString("Samnkelisiwe")); 



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


console.log(countVowels("samnkelisiwe")); 



function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}


console.log(isPrime(2));  
console.log(isPrime(4));  
console.log(isPrime(13));  
console.log(isPrime(25));  
1. Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

 2. Reverse a string without built-in reverse
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

 3. Factorial using recursion
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

 4. Check if string is palindrome
function isPalindrome(str) {
  let reversed = reverseString(str);
  return str === reversed;
}

 5. Fibonacci sequence up to n terms
function fibonacci(n) {
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}

 6. Find second largest number in array
function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

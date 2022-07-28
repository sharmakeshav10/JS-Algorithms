/*
  Given a number 'n', find the first 'n' elements of the fibonacci sequence.
  fibonacci[0] = 0 and fibonacci[1] = 1
  fibonacci[2] = [0, 1]
  fibonacci[4] = [0, 1, 1, 2] 
  ... and so on.
*/

// function fibonacci(n) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// console.log(fibonacci(3)) //[0, 1, 1]
// console.log(fibonacci(8)); //[0, 1, 1, 2, 3, 5, 8, 13]


/* Recursive approach for fibonacci */
function recFibonacci(n) {
  if(n < 2) {
    return n;
  }

  return recFibonacci(n-1) + recFibonacci(n-2);
}

console.log(recFibonacci(6)); //8
console.log(recFibonacci(8)); //21
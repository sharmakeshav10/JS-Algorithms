/* 
  Given a number 'n', find the factorial of the number.
  We know that Factorial of 0 and Factorial of 1, both equate to 1.
  factorial of 2 = 2*1 = 2
  factorial of 5 = 5*4*3*2*1 = 120

  So, factorial(n) = n*(n-1)*(n-2)...*1
*/

function factorial(n) {
  let res = 1;
  for(let i=2; i<=n; i++) {
    res *= i;
  }
  return res;
}

console.log(factorial(5));
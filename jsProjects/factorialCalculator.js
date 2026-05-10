/*
On this tiny project I had to create a function 
to create a Factorial calculator... It was made on fCC "freeCodeCamp".
this only work from numbers 1 to 20...

*/

//// My Code

let num = 5;

function factorialCalculator(num) {
  let result = 1;
    for (let i = 1;i <= num;i++) {
        result = result * i;
    }
        return result;
}

let factorial = factorialCalculator(num);

let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);

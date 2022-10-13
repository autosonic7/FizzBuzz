// When a user inputs a Number
// Loop from 1 to the entered Number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i=1; i <= answer; i++) {
    console.log(i);
}
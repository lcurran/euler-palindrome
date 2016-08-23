'use strict';
/*
This code sample solves problem 36 of Project Euler, a collection of
math problems that can be solved in many programming languages. In this case, I
use JavaScript.

Prompt:
> The decimal number, 585, is 1001001001 in binary, and is palindromic in both
> bases.
>
> Find the sum of all numbers, less than one million, which are palindromic in
> base 10 and base 2.
>
> (Please note that the palindromic number, in either base, may not include
> leading zeros.)
>
> – from [Problem 36 - Project Euler](https://projecteuler.net/problem=36)
*/

const reverse = (num) => num.split('').reverse().join('');
/* This function takes the string it is given and splits it into an array of digits.
then it reverses the order of the array, and joins it to turn the array back
into a single string. */

const palindromeSum = (max) => {
  let sum = 0; // This will be the running total of the sum of palindromic numbers

  for (let i = 0; i < max; i++) {
    // Loops over each number between 0 and the maximum number given
    let n = i;
    // Assigns the incrementing number in the loop to a variable
    let nString = n.toString();
    // Turns the integer into a string, so it can be manipulated
    let nReverse = reverse(nString);
    // Calls the custom reverse function described earlier on the string
    let nBinary = n.toString(2);
    // Converts the base 10 integer to a string of its binary, base 2 equivalent
    let nBinaryReverse = reverse(nBinary);
    // Again reverses the string using the custom reverse function

    if (nString === nReverse && nBinary === nBinaryReverse) {
      sum += n;
    }
    /* This is where the fun happens, and we figure out if the number is palindromic
    in both base 10 and base 2.  We compare the base 10 string with it's reverse, and
    we compare the base 2 string with its reverse. If both of those cases are true,
    then our number is a palindrome, and it gets added to the running sum! */
  }

  return sum;
  // once our for loop hits the maximum number, it ends, and we return the total
  // sum of all our palindromes.
};

/* Bonus challenge! This function identifies all of the palindromes between zero
and a given number in three bases (decimal, binary, and octal), and prints them
to the console */

const palindromeThreeBases = (max) => {
  for (let i = 0; i < max; i++) {
    let n = i;
    let nString = n.toString();
    let nReverse = reverse(nString);
    let nBinary = n.toString(2);
    let nBinaryReverse = reverse(nBinary);
    let nOctal = n.toString(8);
    let nOctalReverse = reverse(nOctal);
    /* same as before, here we set up a for loop that will iterate all the
    variables we will need to test between zero and our given maximum, to see if
    they are palindromic in all three bases.  We assign strings representing our
    number in each base, and the reverse of each. */

    if ((nString === nReverse && nBinary === nBinaryReverse) && nOctal === nOctalReverse) {
      console.log(n);
    }
    /* Now we compare them! Same as before, we compare each base to its reverse.  If
    all three instances are true, then the number is a palindrome in decimal,
    binary, and octal, so it gets printed to the console. */
  }
};

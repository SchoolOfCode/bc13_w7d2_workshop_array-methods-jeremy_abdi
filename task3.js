// You have an array which contains some numbers. You would like to find out if any of the numbers are multiples of the following numbers:

let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

const multipleOf3Nums = someNumbers.some(num => num % 3 === 0)
const multipleOf5Nums = someNumbers.some(num => num % 5 === 0)
const multipleOf60Nums = someNumbers.some(num => num % 60 === 0)
const multipleOf90Nums = someNumbers.some(num => num % 90 === 0)

console.log(multipleOf3Nums)
console.log(multipleOf5Nums)
console.log(multipleOf60Nums)
console.log(multipleOf90Nums)


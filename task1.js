// 👉 1a. Write a function that takes in a string and turns it to upper case.

// 👉 1b. Use the `.map()` method to generate a new array by calling your function on each item in `cats`. Store the returned value from map in the variable `capitalisedCats`,

const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map((cat)=>cat.toUpperCase())
console.log(capitalisedCats) 

// You have an array of lovely animals. However, you can only keep the animals that start with the letter `b`. 

// 👉 2a. In the new variable `bListAnimals`, use the `.filter()` method to generate a new array which contains only the animals whose name begins with 'b'. 

let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter((animal)=>animal[0]==='b')
console.log(bListAnimals)
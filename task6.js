const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

// 👉 6a. Using the .sort() method, rearrange the brooms (numbers) in the broomCupboard array so that they are in ASCENDING order, with broomstick 1 at index 0 and broomstick 10 and index 9.

const sortedBroomCupboard = broomCupboard.sort((b1, b2) => b1 - b2)
console.log(sortedBroomCupboard)


// 👉 6b. Using the .sort() method and the `shelf` property of each potions object, rearrange the four potions in the 'potions' array so they are in DESCENDING order of their shelves, with the 'draught of living death' at index 0 and the 'pepperup potion' at index 3.

const sortedPotions = potions.sort((a, b) => b.shelf - a.shelf)
console.log(sortedPotions)


// 👉 6c. Sort the names in the array in alphebetical order according to their *last* name.

const sortedStudents = students
.map(student => student.split(' '))
.map(item => ({fName: item[0], sName: item[1]}))
.sort((a, b) => (a.sName > b.sName) ? 1 : -1)
.map(a => `${a.fName} ${a.sName}`);
console.log(sortedStudents)
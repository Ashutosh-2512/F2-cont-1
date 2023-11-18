const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((person) => {
    if (person.profession === "developer") {
      console.log(person.name);
    }
  });
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");
  data.push({ name, age, profession });
  console.log("Data added:", data);
}

// 3. Remove Admins
function removeAdmin() {
  const admins = data.filter((person) => person.profession === "admin");
  data = data.filter((person) => person.profession !== "admin");
  console.log("Removed Admins:", admins);
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "dummy", age: 30, profession: "tester" },
    { name: "dummy1", age: 35, profession: "designer" }];

  const resultArray = data.concat(dummyArray);
  console.log("Concatenated Array:", resultArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log("Average Age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  const above25 = data.some((person) => person.age > 25);
  console.log("Age Above 25:", above25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map((person) => person.profession))];
  console.log("Unique Professions:", professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find((person) => person.name === "john");
  if (john) {
    john.profession = "manager";
    console.log("Updated John's Profession:", data);
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter((person) => person.profession === "developer").length;
  const adminCount = data.filter((person) => person.profession === "admin").length;
  console.log("Total Developers:", developerCount);
  console.log("Total Admins:", adminCount);
}

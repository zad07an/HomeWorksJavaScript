const arr = [4,-1,7,-1,9,-1,3,10,-1];

function toSortNumbers(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < 0) {
        continue;
      }
      if (arr[i] < arr[j]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
  }
  return arr;
}

console.log(toSortNumbers(arr));

/*.Create an Employee class. Employee should have: id, firstName, lastName, position, salary, workingHours.
It should have setters and getters for appropriate fields.
It should have a method: getFullName().*/

class Employee {
  constructor(id, firstName, lastName, position, salary, workingHours) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
    this.workingHours = workingHours;
  }
  // Getter andsetter for ID
  get getID() {
    return this.id;
  }
  set setID(newID) {
    this.id = newID;
  }
  // Getter andsetter for firstName
  get getFirstName() {
    return this.firstName;
  }
  set setFirstName(newName) {
    this.firstName = newName;
  }
  // Getter andsetter for lastName
  get getLastName() {
    return this.lastName;
  }
  set setLastName(newLastName) {
    this.lastName = newLastName;
  }
  // Getter andsetter for position
  get getPosition() {
    return this.position;
  }
  set setPosition(newPosition) {
    this.position = newPosition;
  }
  // Getter andsetter for salary
  get getSalary() {
    return this.salary;
  }
  set setSalary(newSalary) {
    this.salary = newSalary;
  }
  // Getter andsetter for workingHourse
  get getWorkingHours() {
    return this.workingHours;
  }
  set setWorkingHours(newWorkingHours) {
    this.workingHours = newWorkingHours;
  }
  // Function for firstName and lastName
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let employe = new Employee(
  3108,
  "Aram",
  "Zadoyan",
  "Developer",
  450000,
  "09:00 - 18:00"
);

console.log(employe);
console.log(employe.firstName);
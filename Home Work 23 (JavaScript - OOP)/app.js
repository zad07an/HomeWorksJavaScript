// 1. Ստեղծել Rectangle class,որը կունենա length և width,կունենա getters,setters համապատասխան դաշտերի համար,getArea() method(մակերես) ,getPerimeter() (պարագիծ) method և toString() method։


// class Rectangle {
//   constructor(length, width) {
//     this.length = length,
//     this.width = width
//   }

//   get getLength(){
//     return this.length;
//   }
//   set setLength(newLength){
//     this.length = newLength;
//   }

//   get getWidth(){
//     return this.width;
//   }
//   set setWidth(newWidth){
//     this.width = newWidth;
//   }

//   getArea(width, length){
//     return `Area of rectangle is ${this.width * this.length}.`;
//   }

//   getPerimeter(width, length){
//     return `Perimeter of rectangle is ${(this.width + this.length) * 2}.`;
//   }

//   toString(){
//     return `Length is ${this.length}m and width is ${this.width}m.`;
//   }
// }

// let rectangle = new Rectangle(10, 14);

// console.log(rectangle.getArea());






/* 2. Գրել class-ներ: Person, Student, Staff.
Person-ը պետք է ունենա: firstName, lastName, gender, age.
Այն պետք է ունենա համապատասխան getter-ները և setter-ներ,toString() method:
Student-ը ժառանգվում է Person-ից:Student-ը պետք է ունենա program( string-ների array,ուսանողի առարկաներն են,որոնք նա սովորում է), year(որ կուրս է).
Այն պետք է ունենա համապատասխան getter-ներ and setter-ներ։
Teacher- ժառանգվում է Person-ից. Այն պետք է ունենա program(string,այն առարկաներն են,որոնք նա դասավանդում է)
Այն պետք է ունենա համապատասխան getter-ներ և setter-ներ, toString method։*/


class Person {
  constructor(firstName, lastName, gender, age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.gender = gender,
    this.age = age
  }

  get getFirstName(){
    return this.firstName;
  }
  set setFirstName(newName){
    this.firstName = newName;
  }

  get getLastName(){
    return this.lastName;
  }
  set setLastName(newLastName){
    this.lastName = newLastName;
  }

  get getGender(){
    return this.gender;
  }
  set setGender(newGender){
    this.gender = newGender;
  }

  get getAge(){
    return this.age;
  }
  set setAge(newAge){
    this.age = newAge;
  }

  toString(){
    return `Hello ${this.firstName} ${this.lastName}, you are a ${this.gender} and you are ${this.age} years old.`
  }
}


// Class Student

class Student extends Person {
  constructor(firstName, lastName, program, year){
    super()
    this.program = program,
    this.year = year
  }

  get getProgram(){
    return this.program;
  }
  set setProgram(newProgram){
    this.program = newProgram;
  }

  get getYear(){
    return this.year;
  }
  set setYear(newYear){   
    this.year = newYear;
  }

  toString(){
    super.toString()
    return `You are teaching ${this.program} and you are ${this.year} course.`;
  }
}


// Class Teacher

class Teacher extends Person{
  constructor(firstName, program){
    super(firstName)
    this.program = program
  }
  
  get getProgram(){
    return this.program;
  }
  set setProgram(newProgram){
    this.program = newProgram;
  }
  toString(){
    return ``
  }
}

let person = new Person();
let student = new Student('Steve', ['Math', 'Phisics'], 3)
let teacher = new Teacher();
console.log(student.toString());





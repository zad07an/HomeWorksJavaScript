// // 1. Գրել ֆունկցիա,որը կստուգի և կվերադարձնի 21-ից բարձր տարիքի մարդկանց տվյալները նոր զանգվածով։(filter-ով)


const people = [

{

name: "tim",

address: {

city: "paris",

},

age: 35,

},

{

name: "john",

address: {

city: "tbilisi",

},

age: 35,

},

{

name: "alex",

address: {

city: "new york",

},

age: 16,

},

{

name: "martha",

address: {

city: "leco",

},

age: 22,

},

{

name: "tom",

address: {

city: "como",

},

age: 38,

},

{

name: "jack",

address: {

city: "moscow",

},

age: 19,

},

{

name: "bob",

address: {

city: "bern",

},

age: 43,

},
];

let result = people.filter(function(person){
  return person.age > 21;
})

console.log(JSON.stringify(result, undefined, 2));


// 2. Given the data array, you must get from data the result, as an example.



const data = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 1, name: "c" },
  { id: 1, name: "d" },
  { id: 3, name: "e" },
  { id: 2, name: "f" },
  { id: 1, name: "g" },
  { id: 6, name: "h" },
  { id: 2, name: "i" },
  { id: 4, name: "j" },
  { id: 7, name: "k" },
  { id: 1, name: "l" },
  { id: 3, name: "m" },
  { id: 1, name: "n" },
  { id: 8, name: "o" },
  { id: 1, name: "p" },
  { id: 4, name: "q" },
  { id: 7, name: "r" },
];
const newData = [];
newData.push({ id: data[0].id, name: [data[0].name] });
for (let i = 1; i < data.length; i++) {
  for (let j = 0; j < newData.length; j++) {
    if (newData[j] && newData[j].id == data[i].id) {
        newData[j].name.push(data[i].name);
      break;
    }
    if (j == newData.length - 1) {
        newData.push({ id: data[i].id, name: [data[i].name] });
    }
  }
}
console.log(newData);



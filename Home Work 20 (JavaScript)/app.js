// // // 1.Գրել ֆունկցիա, որը վերցնում է թվերի զանգված, ստուգում և հաշվում է, թե քանի կենտ և քանի զույգ թիվ կա, և վերադարձնում է պատասխանը օբյեկտով։

// // // Examples:

// // // countOddAndEven([1, 2, 2, 4]); // {odd: 1, even: 3}
// // // countOddAndEven([1, 2, 3]); // {odd: 2, even: 1}
// // // countOddAndEven([11]); // {odd: 1, even: 0}

function countOddAndEven(arr) {
  const obj = {
    odd: 0,
    even: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      obj.even++;
    }
    if (arr[i] % 2 != 0) {
      obj.odd++;
    }
  }
  return obj;
}

console.log(countOddAndEven([1, 2, 2, 4]));
console.log(countOddAndEven([1, 2, 3]));
console.log(countOddAndEven([11]));

// // 2. Գրել ֆունկցիա,որը կստուգի և կվերադարձնի 21-ից բարձր տարիքի մարդկանց տվյալները նոր զանգվածով։

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

function person(obj) {
  const newArr = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].age > 21) {
      newArr.push(obj[i]);
    }
  }
  return newArr;
}

console.log(person(people));

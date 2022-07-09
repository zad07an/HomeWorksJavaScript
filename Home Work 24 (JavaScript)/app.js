/* 1. Ինչ որ ֆունկցիա գրեք,դեպքեր գտեք,որոնց համար այս error-ներն են առաջանում․
1․RangeError
2․

ReferenceError
3․

SyntaxError
4․

TypeError

catch արեք,գրեք որևէ massage և գրեք finnaly*/


let catchErrors = () =>{
  // Error N1 RangeError
  let num = 1
  try{
    num.toPrecision(500);
  } catch (err){
    console.error(`${err.name}: ${err.message}`);
  } finally {
    console.log('Continue...');
  }
  // Error N2 ReferenceError
  try{
    console.log(ar);
  } catch (err) {
    console.error(`${err.name}: ${err.message}`);
  } finally {
    console.log('Continue...');
  }
  // Error N3 SyntaxError
  try {
    eval("alert('Hello)");
  } catch (err){
    console.error(`${err.name}: ${err.message}`);
  } finally {
    console.log('Continue...');
  }
  // Error N4 TypeError
  try{
    console.og('Hello');
  } catch (err){
    console.error(`${err.name}: ${err.message}`);
  } finally {
    console.log('Continue...');
  }
}

catchErrors();


/* 2. div Ֆունկցիա գրեք,որը 2 արգումենտ կստանա և առաջինը կբաժանի երկրորդի վրա ու կվերադարձնի արդյունքը,ստուգել երբ բաժանարարը 0 է, throw new Error անելլ որևէ massage-ով։*/

let div = (a, b) => {
  let result = a / b;
  if (a == 0 || b == 0){
    throw new Error (`Can't divide by 0.`)
  }
  console.log(result);
}

div(10,0)
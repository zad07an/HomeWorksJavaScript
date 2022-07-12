const box = document.querySelector('.div');
const button = document.querySelector('.btn');
const backgroundColorArray = ['green', 'orange', 'red', 'black', 'skyblue'];

const onClick = function(){
  randomBackground = Math.random() * backgroundColorArray.length;
  let choosenBackground = backgroundColorArray[Math.floor(randomBackground)];
  box.style.background = choosenBackground;
  button.style.color = choosenBackground;
}

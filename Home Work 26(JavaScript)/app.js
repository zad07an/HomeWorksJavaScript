// Input, output and monitors

const mainMonitor = document.querySelector('.mainMonitor');
const ul = document.querySelector('.ul');
const secondMonitor = document.querySelector('.secondMonitor');
const output = document.querySelector('.output');
const input = document.querySelector('.input');

// Buttons

const boldButton = document.querySelector('.boldButton');
const italicButton = document.querySelector('.italicButton');
const lineThroughButton = document.querySelector('.lineThroughButton');
const underLineButton = document.querySelector('.underLineButton');
const capitalizeButton = document.querySelector('.capitalizeButton');
const redButton = document.querySelector('.redButton');
const greenButton = document.querySelector('.greenButton');

// Creating new li element

const list = document.createElement('li');


list.setAttribute('class', 'list')

input.addEventListener('keyup', () => {
  list.innerHTML = input.value;
  ul.prepend(list);

  if (list.innerHTML !== ''){
    boldButton.addEventListener('click', () => {
      if (input.value.replaceAll(' ', '')){
        list.classList.toggle('boldFont');
        ul.prepend(list);
      } else {
        alert('Empty');
      }
    })

    italicButton.addEventListener('click', () => {
      if (input.value.replaceAll(' ', '')){
        list.classList.toggle('italicFont');
        ul.prepend(list)
      } else {
        alert('Empty');
      }
    })

    lineThroughButton.addEventListener('click', () => {
      if (input.value.replaceAll(' ', '')) {
        list.classList.toggle('throughLine');
        ul.prepend(list);
      } else {
        alert('Empty');
      }
    })

    underLineButton.addEventListener('click', () => {
      if (input.value.replaceAll(' ', '')) {
        list.classList.toggle('underLine');
        ul.prepend(list);
      } else {
        alert('Empty');
      }
    })

    capitalizeButton.addEventListener('click', () => {
      if (input.value.replaceAll(' ', '')) {
        list.classList.toggle('capitalizeFont');
        ul.prepend(list);
      } else {
        alert('Empty');
      }
    })

    redButton.addEventListener('click', () => {
      if (input.value.replaceAll(' ', '')) {
        list.classList.toggle('redFont');
        ul.prepend(list)
      } else {
        alert('Empty');
      }
    })

    greenButton.addEventListener('click', () => {
      if (input.value.replaceAll(' ', '')) {
        list.classList.toggle('greenFont');
        ul.prepend(list)
      } else {
        alert('Empty');
      }
    })
  } else {
    list.remove()
  }
})
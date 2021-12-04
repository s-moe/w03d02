// const title = document.getElementById('title')
// console.log(title)

const title = document.querySelector('#title')
console.log(title)

//.title = class
//#title = id

const body = document.querySelector('body')
body.style.backgroundColor = 'red'
//note that it's not background-color because we are in JS where we use camelCase

const pEl = document.querySelector('.cool')
console.log(pEl)

pEl.innerHTML = '<strong> I am the GOAT</strong>'
pEl.setAttribute('superman', 'is cool')
console.log(pEl)

const aEl = document.querySelector('a')

aEl.setAttribute('href', 'https://www.google.com')

aEl.classList.add('superman')
aEl.classList.add('batman')
aEl.classList.remove('superman', 'batman')
aEl.classList.add('superman', 'batman', 'wonderWoman')
aEl.classList.toggle('superman')
aEl.classList.toggle('superman')
aEl.classList.replace('superman', 'shazam')
console.log(aEl)

//go through markdown and practice making and changing the elements
const comments = document.querySelectorAll('.comment')
console.log(comments)

// const commentEl = document.querySelectorAll('.comment')
// console.log(commentEl)

//go to MDN for specific for each of these

for(let commentEl of comments) { //how does it know what commentEl is?
  commentEl.setAttribute('superhero', 'batman');
  commentEl.style.fontSize = '30px';                                                                                                                                                                                                                             
	console.log(commentEl);
}
  //set attribute of superhero = batman

document.querySelector('h1').style.color = 'yellow';

const h1El = document.querySelector('h1');
h1El.innerHTML = 'Changing' 
h1El.style.textAlign = 'center'


//What is getAttribute used for? 
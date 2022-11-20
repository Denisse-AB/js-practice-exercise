const body = document.querySelector('body')
const parentDiv = document.createElement('div')

// class
parentDiv.classList.add('grid-container')

body.append(parentDiv)

for (let i = 1; i < 7; i++) {
  const childDiv = document.createElement('div');
  
  childDiv.classList.add('grid-item')
  childDiv.setAttribute('id', i)
  childDiv.setAttribute('onclick', `square(${i})`)
  childDiv.textContent = i
  
  parentDiv.appendChild(childDiv)
}
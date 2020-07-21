
var liElement = document.createElement('li')
var bananaText = document.createTextNode('banana')

liElement.appendChild(bananaText)
console.log(liElement)

var fruits = document.getElementById('fruits')
fruits.appendChild(liElement)
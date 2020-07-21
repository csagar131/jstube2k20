
var countdownELe = document.getElementById('countdown')
console.log(countdownELe.innerText)


// function counterInterval(){
//     console.log(intervalId)
//     countdownELe.innerText-=1
//     console.log(countdownELe.innerText)
//     if (countdownELe.innerText == 0){
//         clearInterval(intervalId)
//     }
// }

// console.log(countdownELe.style.fontSize) 
// this line above will only show the inline element
// window.getComputedStyle(countdownELe).fontSize = '400px'
// computed styles cannot be modified 

var fontSize = window.getComputedStyle(countdownELe).fontSize.split('px')[0]

var intervalId = setInterval(function counterInterval(){
    countdownELe.innerText-=1
    fontSize = parseInt(fontSize) - 20
    countdownELe.style.fontSize = fontSize + 'px'
    if (countdownELe.innerText == 0){
        clearInterval(intervalId)
    }
},1000)

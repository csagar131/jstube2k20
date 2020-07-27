// window.innerHeight
// window.innerWidth

// innerHeight and innerWidth gives the current window height and width visible to user



var mainDiv = document.getElementById('main-div')


mainDiv.onclick = function(e){
    console.log(e.target)
    window.open('https://www.fb.com')
}

// JSON.stringify converts the  object into string type
// .parse()  converts the string back to the object

// document.docuementElement.scrollTop 
// scroll the scrollbar using js
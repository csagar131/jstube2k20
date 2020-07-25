
var todoField = document.getElementById('todo-field')



var lists = document.getElementById('lists')

function addTodo(todoitem){
        var mainDiv = document.createElement('div')
        mainDiv.className = 'todo-lists'
        mainDiv.id = 'todo' +(lists.childElementCount + 1)
        var hTag = document.createElement('h3')
        hTag.innerText = todoitem
        mainDiv.appendChild(hTag)
        var trashIcon = document.createElement('i')
        trashIcon.className = "fas fa-trash-alt"
        trashIcon.onclick = function(e){
            var itemTodo = e.target.parentElement
            console.log(itemTodo)
            itemTodo.remove()
        }
        mainDiv.appendChild(trashIcon)
    return mainDiv
}

todoField.addEventListener('keydown',function(e){
    if (e.key === 'Enter'){
        e.preventDefault()
        lists.insertBefore(addTodo(e.target.value),lists.firstElementChild)
        todoField.value = ''
    }

})


// todoField.addEventListener('change',function(e){
//     console.log(e.target)
// })


// todoField.addEventListener('input',function(e){
//     console.log(e.target.value)
// })

// todoField.addEventListener('blur', function(){
//     console.log('user loses the focus')
// })
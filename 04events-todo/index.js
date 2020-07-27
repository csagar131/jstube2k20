
var todoField = document.getElementById('todo-field')
var lists = document.getElementById('lists')
var saveBtn = document.getElementById('save-btn')

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
            itemTodo.remove()
        }
        mainDiv.appendChild(trashIcon)
    return mainDiv
}

todoField.addEventListener('keydown',function(e){
    if (e.key === 'Enter'){
        e.preventDefault()
        if (e.target.value == ''){
            window.alert('Field is empty')
            return 
        }
        lists.insertBefore(addTodo(e.target.value),lists.firstElementChild)
        todoField.value = ''
    }

})

saveBtn.addEventListener('click',function(e){
        e.preventDefault()
        if (todoField.value == ''){
            window.alert('Field is empty')
            return
        }
        lists.insertBefore(addTodo(todoField.value),lists.firstElementChild)
        todoField.value = ''
})



// console.log(this)

// todoField.addEventListener('change',function(e){
//     console.log(e.target)
// })


// todoField.addEventListener('input',function(e){
//     console.log(e.target.value)
// })

// todoField.addEventListener('blur', function(){
//     console.log('user loses the focus')
// })
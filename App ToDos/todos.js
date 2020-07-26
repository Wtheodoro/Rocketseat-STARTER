let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')


let todos = JSON.parse(localStorage.getItem('list_todos')) || []
function renderTodos() {
    listElement.innerHTML = ''

    for (todo of todos) {
        let todoElement, todoText, linkElement, linkText, position
        todoElement = document.createElement('li')
        todoText = document.createTextNode(todo)

        linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')
        
        linkText = document.createTextNode('Excluir')

        position = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo(' + position + ')')

        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodo() {
    let todoText

    todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''

    renderTodos()
    saveToStorage()    
}

buttonElement.onclick = addTodo

function deleteTodo(position) {
    todos.splice(position, 1)

    renderTodos()
    saveToStorage()
}

// LocalStorage não salva vetor! então precisa converter em string. um jeito seria usar o Json
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}
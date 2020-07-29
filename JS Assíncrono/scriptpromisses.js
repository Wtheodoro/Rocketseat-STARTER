/*********************************************************************************/
/******************************** EX 1 MÓDULO 4 **********************************/
function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (idade > 18) {
                resolve()
            } else {
                reject()
            }
        }, 2000);
    })
    
}

checaIdade(20)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });

/******************************** EX 2 MÓDULO 4 **********************************/
let inputElement, buttonElement, listElement
inputElement = document.querySelector('#app input')
buttonElement = document.querySelector('#app button')
listElement = document.querySelector('#app ul')

axios.get('https://api.github.com/users/wtheodoro/repos')
    .then(function (response) {
        console.log(response.data[0].name)
        let repos = response.data
        let listRepos = repos.map(function (reposName) {
            
        })
    })
    .then(function (error) {
        console.warn(error)
    })

/*
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
*/
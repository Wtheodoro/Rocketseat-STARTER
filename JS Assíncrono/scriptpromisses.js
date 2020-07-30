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

/******************************** EX 2 e 3 MÓDULO 4 **********************************/

var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
    
function renderRepositories(repositories){
    for(repo of repositories){
    var textElement = document.createTextNode(repo.name)
    var liElement = document.createElement('li')

    liElement.appendChild(textElement)
    listElement.appendChild(liElement)

    inputElement.value = ' '
    }
}

function renderError(){
    listElement.innerHTML = ' '
    var textElement = document.createTextNode('Erro ao carregar.')
    var errorElement = document.createElement('li')

    errorElement.appendChild(textElement)
    listElement.appendChild(errorElement)

    inputElement.value = ' '
}

function renderLoading(){
    listElement.innerHTML = ' '
    var textElement = document.createTextNode('Carregando...')
    var loadingElement = document.createElement('li')
    
    loadingElement.appendChild(textElement)
    listElement.appendChild(loadingElement)

    inputElement.value = ' '
}

function listRepositories(){
    var user = inputElement.value
    
    renderLoading()
    axios.get('https://api.github.com/users/' + user + '/repos')
      .then(function(response){
        renderRepositories(response.data)
      })
      .catch(function(){
        renderError()
    })
}

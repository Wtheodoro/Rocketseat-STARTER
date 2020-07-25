/*_______________________________________________________________________
************************** EXERCICIO MÓDULO 01 **************************
***************************** EXERCÍCIO 1 *******************************
_______________________________________________________________________*/

let adress

adress = {
    street: 'Rua dos pinheiros',
    number: 1293,
    neighborhood: 'Centro',
    city: 'São Paulo',
    uf: 'SP'
}

console.log(`O usuário mora em ${adress.city} / ${adress.uf}, no bairro ${adress.neighborhood}, rua "${adress.street}" de nº ${adress.number}`)



//************************** EXERCÍCIO 2 *********************************
//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:


function par(x, y) {
    let arrayPar
    arrayPar = []
    for (let index = x; index <= y; index++) {
        if (index%2 == 0) {
            arrayPar.push(index)
        }   
    }
    console.log(arrayPar)
}
par(32, 321)


//************************** EXERCÍCIO 3 *********************************

let skills = ["Javascript", "ReactJS", "React Native"]
function temHabilidade(habilidade) {
 console.log(habilidade.includes("Javascript")) 
}
temHabilidade(skills)
    /* foi recomendado usar o .indexOF no array mas isso não
    me retorna um valor booleano e sim 0 e -1. Encontrei o.includes
    que retorna true e false */



//************************** EXERCÍCIO 4 *********************************

function exp(anos) {
    if (anos <= 1) {
        console.log(`Seu nível é INICIANTE. Continue firme nos estudos.`)
    } else if (anos <= 3) {
        console.log(`Seu nível é INTERMEDIÁRIO. Parabéns pelo caminho percorrido.`)
    } else if (anos <= 6) {
        console.log(`Seu nível é AVANÇADO. Olá pica do Javascript`)
    } else if (anos <= 80) {
        console.log(`Seu nível é JEDI MASTER. Nem gosto de Star Wars na verdade.`)
    } else {
        console.log(`OLÁ VIAJANTE DO TEMPO! VOCÊ TEM MAIS ANOS DE EXPERIENCIA DO QUE A PROPRIA PROGRAMAÇÃO.`)
    }         
}
 let anosEstudo = 7
 exp(anosEstudo)



 //************************** EXERCÍCIO 5 *********************************

/* Foi sugerido ultilizar o for...of e o .join mas não consegui visualizar a 
usuabilidade do for...of aqui */
 

let usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]

console.log(`O ${usuarios[0].nome} possui as habilidades: ${usuarios[0].habilidades.join()}`)
console.log(`O ${usuarios[1].nome} possui as habilidades: ${usuarios[1].habilidades.join()}`)
//TESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTE

/* let iterable = [10, 20, 30]

for (let value of iterable) {
    console.log(value)
} */
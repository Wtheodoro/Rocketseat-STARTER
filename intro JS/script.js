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



/************************** EXERCÍCIO 2 *********************************

/*
function par(x, y) {
    let arrayPar
    arrayPar = []
    for (let index = x; index <= y; index++) {
        return arrayPar.push(index)   
    }
    console.log(arrayPar)
}
par(32, 321)
ainda não consegui fazer funcionar. estudar mais sobre array e suas propriedades.


*/

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
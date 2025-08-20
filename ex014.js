//A estrutura switch em JavaScript é usada para executar diferentes blocos de código com base no valor de uma expressão. É uma alternativa útil para evitar longas cadeias de if...else if...else.

// Aprendemos neste exércicio como o servidor retorna o dia da semana usando a função Switch.

var agora = new Date()
var diaSem = agora.getDay()

diaSem = 4
/*
   0 - Domingo
   1 - Segunda
   2 - Terça
   3 - Quarta
   4 - Quinta
   5 - Sexta
   6 - Sábado
*/

//console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break        
    default:
        console.log('erro! Dia inválido')
        break
}
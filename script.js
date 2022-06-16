/* 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
 
*/
let students = [
  {
    name: 'Andresa Soares',
    grade1: 8,
    grade2: 7,
  },
  {
    name: 'Esther Rodrigues',
    grade1: 8,
    grade2: 2,
  }

]

let option;

while(option != 2){
let option = Number(prompt(` Para verificar as notas desse concurso seleciona a opção abaixo

1- Verificar Notas
2- Sair.`))

if(option == 1){
  function calcAverage(listStudents) {
  
    let result = ((listStudents.grade1 + listStudents.grade2) / 2).toFixed(2) 
    
    if(result > 7){
      alert(`${listStudents.name},\n You passed this contest, your note was: ${result}`)
    } else {
      alert(`${listStudents.name},\n You faled this contest, your note was: ${result}`)
    }
    alert(`nota de corte do concurso é 7`)
    return result
  }
 
  for(let listStudents of students){
    let listMessage = calcAverage(listStudents)
    alert(listMessage)
  }
} else{
  alert(`aplicação encerrada`)
}

} 

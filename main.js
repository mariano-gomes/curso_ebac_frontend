let firstNumber = document.getElementById("first-input");
let secondNumber = document.getElementById("second-input");
let form = document.getElementById("form")

form.addEventListener("submit", function verificaForm(e) {
  e.preventDefault();
  if(secondNumber.value == "" || firstNumber.value == ""){
    return alert("É necessário inserir algum valor antes de enviar!")
  } else {
    if(parseFloat(secondNumber.value) <= parseFloat(firstNumber.value)) {
      return alert("Dados inválidos!")
    } else {
      return alert("Dados válidos! Formulário enviado com sucesso!")
    } 
  }
})



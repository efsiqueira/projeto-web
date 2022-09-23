const initForm = (qualForm) => {
  const formRequerido = qualForm
  const inputs = formRequerido.querySelectorAll("input")

  if (inputs) {
    inputs.forEach((input) => {
      console.log(input.value)
    })
  } else {
    console.log("Não existem inputs neste formulário")
  }
}

const init = (qualForm) => {
  const formRequerido = document.getElementById(qualForm)
  const submit = formRequerido.querySelector("input[type=submit]")
  submit.addEventListener("click", (evento) => {
    evento.preventDefault()
    initForm(formRequerido)
  })
}

export default init;
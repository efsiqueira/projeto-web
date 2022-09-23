const initForm = (qualForm) => {
  const formRequerido = qualForm
  const inputs = formRequerido.querySelectorAll("input")

  if(inputs.length > 0) {
    inputs.forEach((input) => {
      console.log(input.value)
    })
  }
}

const init = (qualForm) => {
  const formRequerido = document.getElementById(qualForm)
  const submit = formRequerido.querySelector("input[type=submit")
  submit.addEventListener("click", (evento) => {
    initForm(formRequerido)
  })
}

export default init;
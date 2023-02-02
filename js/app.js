// Función provisoria

/*
const afectado = document.getElementById('lbl-parentesco')
afectado.addEventListener('change', () => {
  const nombreDenunciante = document.querySelector('.nombreDenunciante')
  const cuilDenunciante = document.querySelector('.cuilDenunciante')

  
  if (afectado.value =='hijo' || afectado.value == 'conyuge') {
    nombreDenunciante.classList.replace('d-none', 'd-block')
    cuilDenunciante.classList.replace('d-none','d-block')
  } else {
    cuilDenunciante.classList.add('d-none')
    nombreDenunciante.classList.add('d-none')
  }
} 
)
*/


// Otra idea de función es si existe tal variable creando nodos **probar en otro momento**

// Funcion para envio de form

const submitForm = () => {
  const modalEnviar = document.getElementById('exampleModal')
  modalEnviar.classList.add('show','d-block')

}

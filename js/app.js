// Función provisoria
const afectado = document.getElementById('lbl-parentesco')
afectado.addEventListener('change', () => {
  console.log(afectado.value)
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
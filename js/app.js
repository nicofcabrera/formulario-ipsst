// ##### Función provisoria para las options del Afiliado Afectado ####
/*
Otra idea de función es si existe tal variable creando nodos **probar en otro momento
*/

const afectado = document.getElementById('lbl-parentesco')
afectado.addEventListener('change', () => {
  const nombreDenunciante = document.querySelector('.nombreDenunciante')
  const cuilDenunciante = document.querySelector('.cuilDenunciante')
  const lblNombreD = document.getElementById('lbl-denunciante')
  const lblCuilD = document.getElementById('lbl-cuilDenunciante')
  
  if (afectado.value =='hijo' || afectado.value == 'conyuge') {
    nombreDenunciante.classList.replace('d-none', 'd-block')
    lblNombreD.setAttribute('required', true)
    cuilDenunciante.classList.replace('d-none', 'd-block')
    lblCuilD.setAttribute('required', true)
  } else {
    cuilDenunciante.classList.add('d-none')
    lblNombreD.removeAttribute('required')
    nombreDenunciante.classList.add('d-none')
    lblCuilD.removeAttribute('required')
  }
} 
)


// Funcion para el MODAL cuando envio form
const submitForm = () => {
  const modalEnviar = document.getElementById('exampleModal')
  const capaOpacity = document.querySelector('.modal-backdrop')
  capaOpacity.classList.replace('d-none','d-block')
  modalEnviar.classList.add('show', 'd-block')
}

// Funcion para validacion
const enviar = () => {
  console.log('funcion')
  const formulario = document.getElementById('formulario');
  formulario.classList.add('was-validated')
}

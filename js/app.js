

/*
CERCA DE LA SOLUCION
const afectado = document.getElementById('lbl-parentesco')
afectado.addEventListener('change', () => {
  console.log(afectado.value)
  const contenedorAfiliado = document.querySelector('.lala')
  
  let nombreDenunciante = document.createElement('section')
  nombreDenunciante.setAttribute('class', 'col-12 col-lg-6 mb-lg-4')
  nombreDenunciante.innerHTML = `
  <label for="lbl-denunciante" class="form-label">Nombres completo del denunciante *</label>
  <input type="text" id="lbl-denunciante" class="form-control" placeholder="Escribir nombre del denunciante" name="nombreDenunciante">`
  
  let cuilDenunciante = document.createElement('section')
  cuilDenunciante.setAttribute('class', 'col-12 col-lg-6 mb-lg-4');
  cuilDenunciante.innerHTML = `
  <label for="lbl-cuilDenunciante" class="form-label">CUIL denunciante *</label>
  <input type="text" id="lbl-cuilDenunciante" class="form-control" placeholder="Escribir CUIL del denunciante" name="cuilDenunciante">`
  
  if (afectado.value == 'hijo' || afectado.value == 'conyuge') {

  } 
})

*/

// Probando 2
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


/*
  <section class="col-12 col-lg-6 mb-lg-4 nombreDenunciante d-none">
    <label for="lbl-denunciante" class="form-label">Nombres completo del denunciante *</label>
    <input type="text" id="lbl-denunciante" class="form-control" placeholder="Escribir nombre del denunciante" name="nombreDenunciante">
  </section>
  <section class="col-12 col-lg-6 mb-lg-4 cuilDenunciante d-none">
    <label for="lbl-cuilDenunciante" class="form-label">CUIL denunciante *</label>
    <input type="text" id="lbl-cuilDenunciante" class="form-control" placeholder="Escribir CUIL del denunciante" name="cuilDenunciante">
  </section>
*/
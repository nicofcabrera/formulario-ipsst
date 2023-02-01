const nombreDenunciante = document.querySelector('.nombreDenunciante');
const cuilDenunciante = document.querySelector('.cuilDenunciante');
console.log(nombreDenunciante)
console.log(cuilDenunciante)

let afectado = document.getElementById('lbl-parentesco')
afectado.addEventListener('change', () => {
  console.log(afectado.value)
  if (afectado.value =='titular') {
    
  } else {
    
  }
})
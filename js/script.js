let floatcardHome = document.querySelector('.float-card-home')
let floatcardProduts = document.querySelector('.float-card-produtos')
let floatcardAmbiente = document.querySelector('.float-card-ambiente')

window.addEventListener('scroll', function () {
  //Home
  if (window.scrollY < 700){
    floatcardHome.classList.add('scroll-animation')
    floatcardProduts.classList.remove('scroll-animation')
    floatcardAmbiente.classList.remove('scroll-animation')
  }
  //Products
  else if(window.scrollY < 1400){
    floatcardProduts.classList.add('scroll-animation')
    floatcardHome.classList.remove('scroll-animation')
    floatcardAmbiente.classList.remove('scroll-animation')
  }
  //Ambiente
  else if(window.scrollY < 2100){
    floatcardAmbiente.classList.add('scroll-animation')
    floatcardProduts.classList.remove('scroll-animation')
    floatcardHome.classList.remove('scroll-animation')
  }
  // to fix ambiente
  else if(this.window.scrollY > 2101){
    floatcardAmbiente.classList.remove('scroll-animation')
  }
})
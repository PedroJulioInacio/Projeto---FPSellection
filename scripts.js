let prevbutton = document.getElementById('prev')
let nextbutton = document.getElementById('next')
let caixa = document.querySelector('.caixa')
let item = document.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicator')
let dots = document.querySelectorAll('.indicator ul li')
let list = document.querySelector('.list')

let ativado = 0
let firstPosition = 0
let lastPosition = item.length - 1


function setSlider() {
     let itemOld = caixa.querySelector('.list .item.ativado')
     itemOld.classList.remove('ativado')

     let dotsOld = indicator.querySelector('ul li.ativado')
     dotsOld.classList.remove('ativado')
     dots[ativado].classList.add('ativado')

      indicator.querySelector('.numero').innerHTML = '0' + (ativado + 1)
}


prevbutton.onclick = () => {
     list.style.setProperty('--calculation', -1)
     ativado = ativado - 1 < firstPosition ? lastPosition : ativado - 1
     setSlider()
     item[ativado].classList.add('ativado')
     
}
nextbutton.onclick = () => {
     list.style.setProperty('--calculation', 1)
    
     ativado = ativado + 1 > lastPosition ? 0 : ativado + 1
     setSlider()
     item[ativado].classList.add('ativado')
     
    
}

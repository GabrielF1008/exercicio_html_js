const form = document.getElementById('form-numeros')
let numeroEMaior = false
messageError = document.querySelector('.error-message')
campoA = document.getElementById('campo-a')
campoB = document.getElementById('campo-b')
let numeroA = Number(document.getElementById('campo-a').value)
let numeroB = Number(document.getElementById('campo-b').value)

form.addEventListener('submit', function(e) {   
    e.preventDefault()

    console.log(numeroA)
    console.log(numeroB)

    numeroA = Number(document.getElementById('campo-a').value)
    numeroB = Number(document.getElementById('campo-b').value)
    
    numeroB > numeroA ? numeroEMaior = true : numeroEMaior = false


    if(numeroEMaior) {
        document.getElementById('campo-a').value = ''
        document.getElementById('campo-b').value = ''
        document.querySelector('.success-message').style.display = 'block'
        document.querySelector('.error-message').style.display = 'none'
    } else {
        document.querySelector('.success-message').style.display = 'none'
        document.querySelector('.error-message').style.display = 'block'
    }
})

campoA.addEventListener('keyup', function(e){
    numeroB = Number(document.getElementById('campo-b').value)
    if(e.target.value < numeroB){
        document.querySelector('.success-message').style.display = 'none'
        document.querySelector('.error-message').style.display = 'block'
    } else {
        document.querySelector('.error-message').style.display = 'none'
    }

    
})
let menu = document.getElementById('menu')
let numPixel = 300

window.addEventListener('scroll', function(){
    if(window.scrollY > numPixel){
        menu.classList.add('mudaCor')
    }else{
        menu.classList.remove('mudaCor')
    }
})

menu.addEventListener('mouseover', function(){
    menu.classList.remove('mudaCor')
})
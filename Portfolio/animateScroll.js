const animateTarget = document.querySelectorAll('.animate')

const animate1 = 'animate__animated'
const animate2 = 'animate__fadeInDown'
const animate3 = 'animate__fadeIn'

function scrollAnimate(){
    const windowTop = window.scrollY + (window.innerHeight * 0.95)
    
    animateTarget.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animate1, animate2)
        }else if(windowTop < element.offsetTop){
            element.classList.remove(animate1, animate2)
        }
    })
}

scrollAnimate()

window.addEventListener('scroll', function(){
    scrollAnimate()
})


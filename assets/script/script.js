const header = document.querySelector('.big-searchbar')

window.addEventListener('scroll', ()=>{

    if(scrollY > 0) {
        header.classList.add('hide-me')
        body.classList.add('scrolled')
    } else {
        header.classList.remove('hide-me')
        body.classList.remove('scrolled')
    }
    
})


const body = document.querySelector('body')

if(body.classList.contains('pagina-1')) {
    const homeHeader = document.querySelector('.pagina-1 header')

    window.addEventListener('scroll', ()=>{

        if(scrollY > 0) {
            homeHeader.classList.add('bg-white')
        } else {
            homeHeader.classList.remove('bg-white')
        }
        
    })
}


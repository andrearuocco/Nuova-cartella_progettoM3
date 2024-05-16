const header = document.querySelector('.big-searchbar')

const homeHeader = document.querySelector('.pagina-1 header')

window.addEventListener('scroll', ()=>{

    if(scrollY > 0) {
        header.classList.add('hide-me')
        homeHeader.classList.add('bg-white')
    } else {
        header.classList.remove('hide-me')
        homeHeader.classList.remove('bg-white')
    }
    
})

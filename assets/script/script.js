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


/* SCOMPARSA/COMPARSA CAROSELLI CON ANIMAZIONE */
window.addEventListener('scroll', addSection) // aggiungo eventlistener sull'evento scroll 

function addSection() { //creo una funzione che mi dica a che altezza l'utente è arrivato nello scroll verticale della pagina 
  // e la distanza tra quell'altezza e la fine del documento
  let sections = document.querySelectorAll(".carosello") //recupero tutte le mie sezioni

  for (let i of sections) { //le ciclo una per volta
    let dimensioneSec = i.getBoundingClientRect();//recupero le dimensioni di ogni sezione
    if (dimensioneSec.top > window.innerHeight) { //se il bottom della sezione è nella finestra
      i.classList.add("hidden")
    } else {
      i.classList.remove("hidden")
    }
  }
}

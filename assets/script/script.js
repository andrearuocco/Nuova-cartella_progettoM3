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

/*andreaprimo.16/05*/
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2024-03-07',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    events: [
      {
        title: 'Full Booking',
        start: '2024-03-03',
        end: '2024-03-10'
      },/*
      {
        title: 'Long Event',
        start: '2024-03-07',
        end: '2024-03-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2024-03-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2024-03-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2024-03-11',
        end: '2024-03-13'
      },
      {
        title: 'Meeting',
        start: '2024-03-12T10:30:00',
        end: '2024-03-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2024-03-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2024-03-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2024-03-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'https://google.com/',
        start: '2024-03-28'
      }*/
    ]
  });

  calendar.render();
});


flatpickr("#checkin-checkout", {
  mode: "range",
  dateFormat: "Y-m-d",
  locale: "it",
  minDate: "today"
});



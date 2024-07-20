 const poster=document.getElementById('poster')
 const title=document.getElementById('title')
const film1=document.getElementById('film1')
const time =document.getElementById('showtime')
const capacity=document.getElementById('capacity')
const tickets_sold=document.getElementById('tickets_sold')
const film=document.getElementById('film')


fetch('http://localhost:3000/films/1')
.then(res=>res.json())
.then(data => {
  

    const availableTickets=data.capacity-data.tickets_sold
    const li=document.createElement('li')
    li.innerHTML=`
     <img id="poster" src="${data.poster}" alt="Movie Poster">
    <h2 id="title">${data.title}</h2>
    <p id="runtime">${data.runtime}</p>
    <p id="showtime">${data.showtime}</p>
    <p id="availableTickets">${data.description}</p>
    <p id="description">Available Tickets:${availableTickets}</p>`
 
    film1.appendChild(li)
  });

  fetch('http://localhost:3000/films')
  .then(res=>res.json())
  .then(data=>{
    data.forEach(data => {
      const availableTickets=data.capacity-data.tickets_sold
      const lu=document.createElement('li')
      lu.innerHTML=`
      <img id="poster" src="${data.poster}" alt="Movie Poster">
    <h2 id="title">${data.title}</h2>
    <p id="runtime">${data.runtime}</p>
    <p id="showtime">${data.showtime}</p>
    <p id="availableTickets">${data.description}</p>
    <p id="description">Available Tickets:${availableTickets}</p
      
           <button id="buy-tickets" >buy ticket</button>
           <button id="buyticket" >buy</button>
    `

film.appendChild(lu)


    
  })})

 
  
  
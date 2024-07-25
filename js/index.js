const poster = document.getElementById("poster");
const title = document.getElementById("title");
const film1 = document.getElementById("film1");
const time = document.getElementById("showtime");
const capacity = document.getElementById("capacity");
const tickets_sold = document.getElementById("tickets_sold");
const film = document.getElementById("film");

fetch("https://movies-black-phi.vercel.app/films/1")
  .then((res) => res.json())
  .then((data) => {
    const availableTickets = data.capacity - data.tickets_sold;
    const li = document.createElement("li");
    li.innerHTML = `
     <img id="poster" src="${data.poster}" alt="Movie Poster">
    <h2 id="title">Title:${data.title}</h2>
    <p id="runtime">Runtime:${data.runtime}</p>
    <p id="showtime">Showtime${data.showtime}</p>
    <p id="description">description:${data.description}</p>
    <p id="description">Available Tickets:${availableTickets}</p>`;

    film1.appendChild(li);
  });

fetch("https://movies-black-phi.vercel.app/films")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((data) => {
      const availableTickets = data.capacity - data.tickets_sold;
      const lu = document.createElement("li");
      lu.innerHTML = `
      <img id="poster" src="${data.poster}" alt="Movie Poster">
    <h2 id="title">Title:${data.title}</h2>
    <p id="runtime">Runtime:${data.runtime}</p>
    <p id="showtime">ShowTime:${data.showtime}</p>
    <p id="description">Description:${data.description}</p>
    <p id="description">Available Tickets:${availableTickets}</p
      
           <button id="buy-tickets" >buy ticket</button>
           <button id="buyticket" >buy</button>
    `;

      film.appendChild(lu);
    });
  });

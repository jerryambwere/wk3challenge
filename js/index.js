document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('http://localhost:3000/films/1');
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const movieData = await response.json();

  
    const availableTickets = movieData.capacity - movieData.tickets_sold;

  
    document.getElementById('poster').src = movieData.poster;
    document.getElementById('title').textContent = movieData.title;
    document.getElementById('runtime').textContent = `Runtime: ${movieData.runtime} minutes`;
    document.getElementById('showtime').textContent = `Showtime: ${movieData.showtime}`;
    document.getElementById('availableTickets').textContent = `Available Tickets: ${availableTickets}`;
    document.getElementById('description').textContent = movieData.description;

  } catch (error) {
    console.error('Error fetching and displaying movie details:', error);
  }
});

document.addEventListener('DOMContentLoaded',function () {
  const deleteBtn=document.querySelectorAll('#films.delete-btn')
  deleteBtn.forEach(btn=>{
    btn.addEventListener('click',function(e){
      const filmItem= this.parentElement
      const filmName= filmItem.textContent.trim()

      fetch(`http/localhost:3000/films${Id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('error');
        }
        filmItem.remove();
      })
      .catch(error => {
        console.error('Error deleting film:', error);
    
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', async function () {
  const filmsList = document.getElementById('films');

  try {
    const response = await fetch('http/localhost:3000/films'); 
    if (!response.ok) {
      throw new Error('Failed to fetch movie list');
    }
    const movies = await response.json();

  
    const placeholderLi = filmsList.querySelector('li');
    if (placeholderLi) {
      filmsList.removeChild(placeholderLi);
    }
  
    
    movies.forEach(movie => {
      const li = document.createElement('li');
      li.classList.add('film', 'item');
      li.innerHTML = `<a href="#" data-id="${movie.id}">${movie.title}</a>`;
      filmsList.appendChild(li);
    })
  } catch (error) {
    console.error('no result', error);
  }
});





    document.addEventListener('DOMContentLoaded', async function () {
      const filmsList = document.getElementById('films');
    
      try {
        const response = await fetch('http://localhost:3000/films');
        if (!response.ok) {
          throw new Error('no results');
        }
        const movies = await response.json();
    
        movies.forEach(movie => {
          const li = document.createElement('li');
          li.classList.add('film', 'item');
          li.innerHTML = `
            <img class="poster" src="${movie.poster}" alt="Movie Poster">
            <h2 class="title">${movie.title}</h2>
            <p class="runtime">Runtime: ${movie.runtime} minutes</p>
            <p class="showtime">Showtime: ${movie.showtime}</p>
            <p class="availableTickets">Available Tickets: ${movie.capacity - movie.tickets_sold}</p>
            <p class="description">${movie.description}</p>
            <button class="buy-ticket-btn" data-id="${movie.id}">Buy Ticket</button>
          `;
          filmsList.appendChild(li);
    
      
          const buyTicketBtn = li.querySelector('.buy-ticket-btn');
          buyTicketBtn.addEventListener('click', async function () {
            try {
              const movieId = this.dataset.id;
              const response = await fetch(`http://localhost:3000/films/${movieId}/buy-ticket`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
    
              if (!response.ok) {
                throw new Error('Failed to buy ticket');
              }
    
        
              const movieData = await response.json();
              const availableTicketsElement = li.querySelector('.availableTickets');
              availableTicketsElement.textContent = `Available Tickets: ${movieData.capacity - movieData.tickets_sold}`;
    
            } catch (error) {
              console.error('NO tickets available', error);
              alert('failed');
            }
          });
        });
    
      } catch (error) {
        console.error('no results', error);
      }
    });
    
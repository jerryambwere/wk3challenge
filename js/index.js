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
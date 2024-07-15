const firstMovie=
fetch("http://localhost:3000/films/1")
  .then((response) => response.json())
  .then((data) => {
    firstMovie
  })


const dataFetch= document.getElementById('films')
fetch("http://localhost:3000/films")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((data) =>{
        dataFetch.insertAdjacentHTML( 'beforeend',`<li>${data.title}</li>`)
        

 } ))
    
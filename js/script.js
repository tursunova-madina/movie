"use strict";

let wrapper = document.querySelector(".wrapper");


for (let i = 0; i < films.length; i++) {
  let film = films[i];
  let dateYear = new Date(film.release_date).getFullYear();

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <img src="${film.poster}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${film.title}</h5>
        <p class="card-text"> <b><i class="bi bi-calendar2-plus"></i>  ${dateYear}</b></p>
        <p class="card-text">${film.genres}</p>
        <p class="card-text">${film.overview}</p>
        <button href="#" class=" modal-open btn btn-primary">More info</button>
      </div>
    `;
  wrapper.appendChild(card);
}


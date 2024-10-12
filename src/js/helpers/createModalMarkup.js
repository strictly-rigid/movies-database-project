export async function createModalMarkup(data) {
  const {
    id,
    budget,
    genres,
    origin_country,
    title,
    original_title,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    vote_average,
    vote_count,
    overview,
  } = data;

  let markup = `
   
      <div class="movie-item-detailed">
        <h2 class="modal-title">${title}</h2>
        <h3 class="modal-original-title">Original title: ${original_title}</h3>
        <p class="orig-country">${origin_country}</p>
        <p class="modal-release-date">${release_date}</p>
        <p class="modal-movie-description">Desription: ${overview}</p>
        <p class="modal-genres">Genres: ${genres}</p>
        <p class="languages">Spoken languages: ${spoken_languages}</p>
        <span class="budget">${budget}</span>
        <span class="revenue">${revenue}</span>
        <p class="runtime">Time: ${runtime}</p>
        <span class="rating">Rating: ${vote_average}</span>
        <span class="vote-count">Total votes: ${vote_count}</span>
      </div>`;

  //   bookItemWrapper.innerHTML = markup;

  //   refs.closeBtn = document.querySelector('.modal-close-btn');
  //   refs.closeBtn.addEventListener('click', onModalClose);
  //   window.addEventListener('keydown', onEscKeyPress);
  //   console.log(refs.closeBtn);
}

import { refs4 } from '../refs4';
import { URLS } from '../constants';

import { notifyDeleteSuccess } from '../helpers/notifyWarnings';

let favoriteSeriesList =
  JSON.parse(localStorage.getItem('favorite_series')) ?? [];

export function renderFavoriteSeries(series) {
  const favoriteSeries = series
    .map(
      ({
        id,
        createdBy,
        inProduction,
        languages,
        genres,
        originCountry,
        name,
        firstAir,
        numberSeasons,
        numberEpisodes,
        voteAverage,
        voteCount,
        overview,
        posterPath,
      }) => {
        const genreNames = genres.map(genre => genre.name).join(', ');
        const languagesSpoken = languages.map(language => language).join(', ');
        const creators = createdBy.map(creator => creator.name).join(', ');

        return `<div class="series-item-detailed-fav" id=${id}>
       <img src="${URLS.POSTER_URL}${posterPath}" class="series-poster" alt="series poster">
        <h2 class="modal-title" id="seriesName">${name}</h2>
        <p class="modal-genres"><span class="modal-bold">Genres:</span> ${genreNames}</p>
       
        <p class="orig-country"><span class="modal-bold">Origin country:</span> ${originCountry}</p>
        <p class="in-production"><span class="modal-bold">Still in production:</span> ${inProduction}</p>
      

     
        <p class="first-air-date"><span class="modal-bold">First air date:</span> ${firstAir}</p>
        <p class="modal-series-description"><span class="modal-bold">Desription:</span> ${overview}</p>
      
        <p class="created-by"><span class="modal-bold">Creators:</span> ${creators}</p>
        <p class="languages"><span class="modal-bold">Spoken languages:</span> ${languagesSpoken}</p>
        <div class="series-length">
        <span class="seasons"><span class="modal-bold">Number of seasons:</span> ${numberSeasons}</span>
        <span class="episodes"><span class="modal-bold">Number of episodes:</span> ${numberEpisodes}</span>
        </div>

        <div class="series-modal-rate">
         <span class="rating"><span class="modal-bold">Rating:</span> ${voteAverage}</span>
         <span class="vote-count"><span class="modal-bold">Total votes:</span> ${voteCount}</span>
         </div>

          <button type="button" class="delete-btn-series">Delete from favorites</button>
   
      </div>`;
      }
    )
    .join('');

  refs4.favSeries.insertAdjacentHTML('beforeend', favoriteSeries);

  const deleteBtns = document.querySelectorAll('.delete-btn-series');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      const seriesItem = event.target.closest('.series-item-detailed-fav');
      const deletedName = seriesItem.querySelector('#seriesName').innerText;
      deleteFromFavoriteSeries(event, deletedName);
    });
  });
}

function deleteFromFavoriteSeries(event, seriesName) {
  const seriesId = event.target.closest('.series-item-detailed-fav').id;

  favoriteSeriesList = favoriteSeriesList.filter(serie => serie.id != seriesId);

  localStorage.setItem('favorite_series', JSON.stringify(favoriteSeriesList));

  event.target.closest('.series-item-detailed-fav').remove();

  notifyDeleteSuccess(seriesName);

  if (favoriteSeriesList.length === 0) {
    refs4.noResultsSeries.classList.remove('visually-hidden');
    refs4.favSeriesTitle.classList.add('visually-hidden');
  }
}

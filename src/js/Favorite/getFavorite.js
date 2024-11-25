import { refs4 } from '../refs4';
import { renderFavoriteMovies } from './favoriteMovies';
import { renderFavoriteSeries } from './favoriteSeries';
import { renderFavoritePeople } from './favoritePeople';

/* ====================== FAVORITE MOVIES ======================  */
let favoriteMoviesList =
  JSON.parse(localStorage.getItem('favorite_movies')) ?? [];

if (favoriteMoviesList.length) {
  refs4.noResultsMovies.classList.add('visually-hidden');
  refs4.favMoviesTitle.classList.remove('visually-hidden');
}

renderFavoriteMovies(favoriteMoviesList);

/* ====================== FAVORITE SERIES ======================  */
let favoriteSeriesList =
  JSON.parse(localStorage.getItem('favorite_series')) ?? [];

if (favoriteSeriesList.length) {
  refs4.noResultsSeries.classList.add('visually-hidden');
  refs4.favSeriesTitle.classList.remove('visually-hidden');
}

renderFavoriteSeries(favoriteSeriesList);

/* ====================== FAVORITE PEOPLE ======================  */
let favoritePeopleList =
  JSON.parse(localStorage.getItem('favorite_people')) ?? [];

if (favoritePeopleList.length) {
  refs4.noResultsPeople.classList.add('visually-hidden');
  refs4.favPeopleTitle.classList.remove('visually-hidden');
}

renderFavoritePeople(favoritePeopleList);

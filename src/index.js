import { refs } from './js/refs';
import { refs2 } from './js/refs2';
import axios from 'axios';

import { fetchTrendingMovies } from './js/TrendingMovies/fetchTrendingMovies.js';
import { renderTrendingMovies } from './js/TrendingMovies/renderTrendingMovies.js';

import { searchMovie } from './js/TrendingMovies/searchMovie.js';
import { renderFoundMovies } from './js/TrendingMovies/renderFoundMovies.js';

import { fetchTrendingSeries } from './js/TrendingSeries/fetchTrendingSeries.js';
import { renderTrendingSeries } from './js/TrendingSeries/renderTrendingSeries.js';

import { searchSeries } from './js/TrendingSeries/searchSeries.js';
import { renderFoundSeries } from './js/TrendingSeries/renderFoundSeries.js';

import { fetchTrendingPeople } from './js/TrendingPeople/fetchTrendingPeople.js';
import { renderTrendingPeople } from './js/TrendingPeople/renderTrendingPeople.js';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const BASE_SERIES_URL = 'https://api.themoviedb.org/3/trending/tv/week';
const BASE_PEOPLE_URL = 'https://api.themoviedb.org/3/trending/person/week';

const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
const SEARCH_SERIES_URL = 'https://api.themoviedb.org/3/search/tv';

fetchTrendingMovies(API_KEY, BASE_URL, renderTrendingMovies);

fetchTrendingSeries(API_KEY, BASE_SERIES_URL, renderTrendingSeries);

fetchTrendingPeople(API_KEY, BASE_PEOPLE_URL, renderTrendingPeople);

if (refs?.form) {
  refs.form.addEventListener('submit', e => {
    e.preventDefault();
    const query = refs.form.searchQuery.value.trim();
    searchMovie(API_KEY, SEARCH_MOVIE_URL, query, renderFoundMovies);
  });
}

if (refs2?.form) {
  refs2.form.addEventListener('submit', e => {
    e.preventDefault();
    const query = refs2.form.searchQuery.value.trim();
    searchSeries(API_KEY, SEARCH_SERIES_URL, query, renderFoundSeries);
  });
}

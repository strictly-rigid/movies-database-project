import { refs } from './js/refs';
import { refs2 } from './js/refs2';
import { refs3 } from './js/refs3';
import axios from 'axios';

import { URLS } from './js/constants.js';

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

import { searchPerson } from './js/TrendingPeople/searchPerson.js';
import { renderFoundPerson } from './js/TrendingPeople/renderFoundPerson.js';

import { fetchSingleSeries } from './js/TrendingSeries/fetchSingleSeries.js';
import { createSeriesModalMarkup } from './js/helpers/createSeriesModalMarkup.js';

import { fetchSinglePerson } from './js/TrendingPeople/fetchSinglePerson.js';
import { createPersonModalMarkup } from './js/helpers/createPersonModalMarkup.js';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const BASE_SERIES_URL = 'https://api.themoviedb.org/3/trending/tv/week';
const BASE_PEOPLE_URL = 'https://api.themoviedb.org/3/trending/person/week';

const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
const SEARCH_SERIES_URL = 'https://api.themoviedb.org/3/search/tv';
const SEARCH_PERSON_URL = 'https://api.themoviedb.org/3/search/person';

// let currentPage = 1;

// fetchTrendingMovies(API_KEY, BASE_URL, renderTrendingMovies, currentPage);

// fetchTrendingSeries(API_KEY, BASE_SERIES_URL, renderTrendingSeries);

// fetchTrendingPeople(API_KEY, BASE_PEOPLE_URL, renderTrendingPeople);

let isSearching = false;

if (refs?.form) {
  refs.form.addEventListener('submit', e => {
    e.preventDefault();
    const query = refs.form.searchQuery.value.trim();

    if (query) {
      isSearching = true;
      searchMovie(API_KEY, SEARCH_MOVIE_URL, query, renderFoundMovies);
    } else {
      isSearching = false;
    }
  });
}

import { refs } from './js/refs';
import axios from 'axios';

import { fetchTrendingMovies } from './js/TrendingMovies/fetchTrendingMovies.js';
import { renderTrendingMovies } from './js/TrendingMovies/renderTrendingMovies.js';

import { fetchTrendingSeries } from './js/TrendingSeries/fetchTrendingSeries.js';
import { renderTrendingSeries } from './js/TrendingSeries/renderTrendingSeries.js';

import { fetchTrendingPeople } from './js/TrendingPeople/fetchTrendingPeople.js';
import { renderTrendingPeople } from './js/TrendingPeople/renderTrendingPeople.js';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const BASE_SERIES_URL = 'https://api.themoviedb.org/3/trending/tv/week';
const BASE_PEOPLE_URL = 'https://api.themoviedb.org/3/trending/person/week';

fetchTrendingMovies(API_KEY, BASE_URL, renderTrendingMovies);

fetchTrendingSeries(API_KEY, BASE_SERIES_URL, renderTrendingSeries);

fetchTrendingPeople(API_KEY, BASE_PEOPLE_URL, renderTrendingPeople);

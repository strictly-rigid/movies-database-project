import { refs } from './js/refs';
import axios from 'axios';

import { fetchTrendingMovies } from './js/TrendingMovies/fetchTrendingMovies.js';
import { renderTrendingMovies } from './js/TrendingMovies/renderTrendingMovies.js';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';

fetchTrendingMovies(API_KEY, BASE_URL, renderTrendingMovies);

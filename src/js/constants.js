export const URLS = {
  BASE_MOVIES_URL: 'https://api.themoviedb.org/3/trending/movie/week',
  BASE_SERIES_URL: 'https://api.themoviedb.org/3/trending/tv/week',
  BASE_PEOPLE_URL: 'https://api.themoviedb.org/3/trending/person/week',
  SEARCH_MOVIE_URL: 'https://api.themoviedb.org/3/search/movie',
  SEARCH_SERIES_URL: 'https://api.themoviedb.org/3/search/tv',
  SINGLE_MOVIE_URL: 'https://api.themoviedb.org/3/movie',
  SINGLE_SERIES_URL: 'https://api.themoviedb.org/3/tv',
  SEARCH_PERSON_URL: 'https://api.themoviedb.org/3/search/person',
  SINGLE_PERSON_URL: 'https://api.themoviedb.org/3/person',
  POSTER_URL: `https://image.tmdb.org/t/p/w500`,
  DEFAULT_IMAGE:
    'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
};

export const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

export const genders = {
  0: 'Unknown',
  1: 'Female',
  2: 'Male',
  3: 'Non-binary',
};

export const trendingObserverOptions = {
  root: null,
  rootMargin: '400px',
  threshold: 1.0,
};

export const searchObserverOptions = {
  root: null,
  rootMargin: '400px',
  threshold: 1.0,
};

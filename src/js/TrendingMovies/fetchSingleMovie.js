import axios from 'axios';
let isLoading = false;

export async function fetchSingleMovie(key, url, id) {
  try {
    isLoading = true;
    const response = await axios.get(`${url}/${id}?api_key=${key}`);
    console.log(response);
    const dataMovies = response.data;
    return dataMovies;
  } catch (error) {
    console.log('Error fetching a movie:', error.message);
  } finally {
    isLoading = false;
  }
}

// import axios from 'axios';
// import { refs } from '../refs';
// import { URLS } from '../constants';
// import { createModalMarkup } from '../helpers/createModalMarkup';
// const API_KEY = '86bcaf318e232372b2e8e2623c959f88';

// export async function fetchSingleMovie(key, url, id) {
//   try {
//     isLoading = true;
//     const response = await axios.get(`${url}/${id}?api_key=${key}`);
//     console.log(response);
//     const dataMovies = response.data;
//     return dataMovies;
//   } catch (error) {
//     console.log('Error fetching a movie:', error.message);
//   } finally {
//     isLoading = false;
//   }
// }

// if (refs?.moviesContainer) {
//   refs.moviesContainer.addEventListener('click', onModalOpen);
// }

// async function onModalOpen(e) {
//   e.preventDefault();
//   const targetElement = e.target.closest('.movies-item');
//   if (targetElement) {
//     const dataId = targetElement.getAttribute('data-id');
//     const data = await fetchSingleMovie(API_KEY, URLS.SINGLE_MOVIE_URL, dataId);
//     createModalMarkup(data);
//     // window.addEventListener('keydown', onEscKeyPress);
//     refs.backdrop.addEventListener('click', onBackdropClick);
//   }
// }

// // function onEscKeyPress(event) {
// //   if (event.code === 'Escape') {
// //     onModalClose();
// //   }
// // }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     onModalClose();
//   }
// }

// function onModalClose() {
//   refs.modalWrapper.innerHTML = '';

//   refs.backdrop.classList.toggle('is-hidden');
//   // document.body.classList.remove('modal-open');

//   // refs.backdrop.removeEventListener('click', onModalClose);
//   // refs.closeBtn.removeEventListener('click', onModalClose);
//   window.removeEventListener('keydown', onEscKeyPress);
// }

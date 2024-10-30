import { Notify } from 'notiflix';

export function notifyEndResults() {
  Notify.warning(
    'We are sorry, but you have reached the end of search results.',
    {
      timeout: 3000,
      fontSize: '20px',
    }
  );
}

export function notifyNoResults() {
  Notify.failure(
    'We are sorry, but there are no matching results for your request.',
    {
      timeout: 3000,
      fontSize: '20px',
    }
  );
}

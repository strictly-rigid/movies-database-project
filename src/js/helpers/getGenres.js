export function getGenres(genre_ids, genres) {
  return genre_ids
    .map(id => {
      const genre = genres.find(g => g.id === id);
      return genre ? genre.name : '';
    })
    .filter(Boolean)
    .join(', ');
}

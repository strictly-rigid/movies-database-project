export function setNewObserver(callback, options) {
  return new IntersectionObserver(callback, options);
}

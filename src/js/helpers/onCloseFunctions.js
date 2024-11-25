export function onEscKeyPress(event, callbackClose) {
  if (event.code === 'Escape') {
    callbackClose();
  }
}

export function onBackdropClick(event, callbackClose) {
  if (event.currentTarget === event.target) {
    callbackClose();
  }
}

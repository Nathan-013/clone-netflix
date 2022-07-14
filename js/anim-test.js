const carousselContainer = document.querySelector('[data-js="carousel-container"]')

carousselContainer.addEventListener('click', e => {
  alert(e.target)
})
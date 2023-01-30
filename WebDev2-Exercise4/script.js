const images = [
  './images/avocado.jpeg',
  './images/pancake.jpeg',
  './images/sandwich.jpeg',
  './images/spaghetti.jpeg',
]

const img = document.querySelector('img')

window.addEventListener('DOMContentLoaded', () => {
  img.src = images[0]
})

const prev = document.querySelector('#prev-button')
const next = document.querySelector('#next-button')
let currentSlide = 0
const lastSlide = images.length - 1

prev.addEventListener('click', () => {
  if (currentSlide == 0) {
    currentSlide = lastSlide
    return (img.src = images[currentSlide])
  }
  currentSlide -= 1
  img.src = images[currentSlide]
})

next.addEventListener('click', () => {
  if (currentSlide == lastSlide) {
    currentSlide = 0
    return (img.src = images[currentSlide])
  }
  currentSlide += 1
  img.src = images[currentSlide]
})

function isTouching(a, b) {
  const aRect = a.getBoundingClientRect()
  const bRect = b.getBoundingClientRect()

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  )
}

let count = 0
const h1 = document.createElement('h1')
h1.innerHTML = `Score: ${count}`
document.body.appendChild(h1)

const init = () => {
  const avatar = document.querySelector('#avatar')
  const coin = document.querySelector('#coin')

  const footstepAudio = new Audio('./audio/smw_footstep.wav')
  const scoreAudio = new Audio('./audio/smw_coin.wav')

  moveCoin()
  window.addEventListener('keyup', function (e) {
    const avatarRect = avatar.getBoundingClientRect()
    const coinRect = coin.getBoundingClientRect()
    const width = document.body.scrollWidth - 50
    const height = window.innerHeight - 50

    if (e.key === 'ArrowDown' || e.key === 'Down') {
      footstepAudio.play()
      if (height < avatarRect.bottom) return
      moveVertical(avatar, 50)
    }
    if (e.key === 'ArrowUp' || e.key === 'Up') {
      footstepAudio.play()
      if (avatarRect.top < 50) return
      moveVertical(avatar, -50)
    }
    if (e.key === 'ArrowRight' || e.key === 'Right') {
      footstepAudio.play()
      avatar.style.transform = 'rotateY(0)'
      if (width < avatarRect.right) return
      moveHorizontal(avatar, 50)
    }
    if (e.key === 'ArrowLeft' || e.key === 'Left') {
      footstepAudio.play()
      avatar.style.transform = 'rotateY(180deg)'
      if (avatarRect.left < 50) return
      moveHorizontal(avatar, -50)
    }

    if (isTouching(avatar, coin)) {
      moveCoin(avatarRect, coinRect)
      count++
      scoreAudio.play()
      h1.innerHTML = `Score: ${count}`
    }
  })
}

const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top)
  element.style.top = `${currTop + amount}px`
}

const moveHorizontal = (element, amount) => {
  const currLeft = extractPos(element.style.left)
  element.style.left = `${currLeft + amount}px`
}

const extractPos = (position) => {
  if (!position) return 100
  return parseInt(position.slice(0, -2))
}

const moveCoin = (avatarRect, coinRect) => {
  let x = Math.floor(Math.random() * window.innerWidth - 100)
  let y = Math.floor(Math.random() * window.innerHeight - 100)

  if (y < 0) y = 0
  if (x < 0) x = 0

  if (coinRect) {
    if (
      x > avatarRect.x - 100 &&
      x < avatarRect.x + 100 &&
      y > avatarRect.y - 100 &&
      y < avatarRect.y + 100
    ) {
      moveCoin(avatarRect, coinRect)
      return
    }
  }
  coin.style.top = `${y}px`
  coin.style.left = `${x}px`
}

init()

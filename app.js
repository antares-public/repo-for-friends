function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

const funny_button = document.getElementById('funny_button')
const allow = document.getElementById('allow')
const lol = document.getElementById('lol')

allow.addEventListener('click', () => {
  lol.style.display = 'block'
})

funny_button.addEventListener('click', () => {
  const { left, top } = getCoords(funny_button)

  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight

  const leftPosition = left + Math.floor(Math.random() * (100 - (-100)) + (-100))
  const topPosition = top + Math.floor(Math.random() * (100 - (-100)) + (-100))

  funny_button.style.position = 'absolute'
  funny_button.style.left = (left > 300
    ? leftPosition - 100
      : left < 100
      ? leftPosition + 100
    : leftPosition) + 'px'

  funny_button.style.top = (top > 300
    ? topPosition - 100
      : top < 100
      ? topPosition + 100
    : topPosition) + 'px'
});

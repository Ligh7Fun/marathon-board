const board = document.querySelector('#board')
const SQUARE_NUMBER = 504
const colors = [
	'#e74c3c',
	'#8e44ad',
	'#3498db',
	'#e67e22',
	'#2ecc71',
	'#f1c40f',
	'#1abc9c',
	'#9b59b6',
	'#34495e',
	'#16a085',
	'#50ee50',
]

for (let i = 0; i < SQUARE_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => setColor(square))
	square.addEventListener('mouseleave', () => removeColor(square))

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 15px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}

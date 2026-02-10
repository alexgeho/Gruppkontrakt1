import './style.css'

const input = document.querySelector('#answer') as HTMLInputElement
const btn = document.querySelector('#check') as HTMLButtonElement
const room = document.querySelector('.room') as HTMLElement

btn.addEventListener('click', () => {
  if (input.value.trim() === 'justify-content: center') {
    room.style.justifyContent = 'center'
    setTimeout(() => {
      window.location.href = '/page4.html'
    }, 800)
  } else {
    alert('Nope 🐸')
  }
})
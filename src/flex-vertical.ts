import './style.css'

const input = document.querySelector('#answer') as HTMLInputElement
const btn = document.querySelector('#check') as HTMLButtonElement
const room = document.querySelector('.room') as HTMLElement

btn.addEventListener('click', () => {
  if (input.value.trim() === 'align-items: center') {
    room.style.alignItems = 'center'
    setTimeout(() => {
      window.location.href = '/page5.html'
    }, 800)
  } else {
    alert('Try again 🐸')
  }
})
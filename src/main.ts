import './style.css'
import { setupCounter } from './counter'

const button = document.querySelector<HTMLButtonElement>('#counter')!
const door = document.querySelector('.door') as HTMLElement

const doorSound = new Audio('/door-open.wav')

setupCounter(button, () => {
  doorSound.currentTime = 0
  doorSound.play()

  door.classList.add('open')

  setTimeout(() => {
    window.location.href = '/page2.html'
  }, 900)
})
import './style.css'

import { setupCounter } from './counter.ts'


const button = document.querySelector<HTMLButtonElement>('#counter')!

setupCounter(button, onFive)

function onFive() {
  window.location.href = '/page2.html'
}


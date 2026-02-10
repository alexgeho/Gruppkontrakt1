export function setupCounter(
  element: HTMLButtonElement,
onFive: () => void) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `press counter ${counter}`

    if (counter === 5) {
      onFive()
    }

  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
let newBirthdays
const dobForm = document.querySelector('#dob-form')
const dobInput = document.querySelector('#dob')
dobForm.onsubmit = (e) => {
  e.preventDefault()
  newBirthdays = dobInput.value
}

function countdown() {
  const newBirthdaysDate = new Date(newBirthdays)
  const currentDate = new Date()

  const totalSeconds = (newBirthdaysDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  daysEl.innerHTML = days
  hoursEl.innerHTML = formatTime(hours)
  minsEl.innerHTML = formatTime(mins)
  secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

countdown()
setInterval(countdown, 1000)

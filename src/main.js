import './scss/main.scss'

const button = document.querySelector('.button')
const passwordEls = document.querySelectorAll('.password')

const alphas = 'abcdefghijklmnopqrstuvwxyz'
const digits = '0123456789'
const nonAlphas = '~!@#$%^&*()-+=?/<>|[]{}_ :;.,`'
const possibleCharacters = `
${alphas}${alphas.toUpperCase()}${digits}${nonAlphas}
`
const passwordLength = 8

const getRandomArrayLocation = () => {
  return Math.floor(Math.random() * possibleCharacters.length)
}

const getRandomCharacter = () => {
  return possibleCharacters[getRandomArrayLocation()]
}

const getRandomPassword = () => {
  let password = ''
  for (let i = 0; i < passwordLength; i++) {
    password += getRandomCharacter()
  }
  return password
}

const generatePasswords = (e) => {
  e.preventDefault()
  passwordEls.forEach((element) => {
    element.textContent = getRandomPassword()
  })
}

button.addEventListener('click', generatePasswords)

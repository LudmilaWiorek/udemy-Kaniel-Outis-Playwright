const crypto = require('crypto')

export async function getRandomNumber() {
  // kreuje randomową liczbę w terminalu (po dodaniu do testu!)
  return Math.floor(Math.random() * 1000 + 1)
}

export async function getRandomString() {
  // kreuje randomowy ciąg znaków w terminalu (po dodaniu do testu!)
  return crypto.randomBytes(20).toString('hex')
}

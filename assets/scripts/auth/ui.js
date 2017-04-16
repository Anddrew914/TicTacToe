'use strict'
const store = require('../store.js')
const signUpSuccess = (data) => {
  $('#sign-up').hide()
}

const signUpFailure = () => {
  $('div.text-box').text('Error, wrong password?')
  setTimeout(function () {
    $('div.text-box').text('')
  }, 3000)
}

const signInSuccess = (data) => {
  store.user = data.user
  // $('#playarea').toggle()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#create-game').show()
  $('.signUp').hide()
  $('.signIn').hide()
}

const signInFailure = (data) => {
  $('div.text-box').text('Oops! Did you create a username?')
  setTimeout(function () {
    $('div.text-box').text('')
  }, 3000)
  console.log(data)
  debugger
}

const changePasswordSuccess = (data) => {
  $('div.text-box').text('Password changed!')
  setTimeout(function () {
    $('div.text-box').text('')
  }, 3000)
}

const changePasswordFailure = () => {
  $('div.text-box').text('That didn\'t work, try again!')
  setTimeout(function () {
    $('div.text-box').text('')
  }, 3000)
}

const signOutSuccess = (data) => {
  $('#playarea').hide()
  // $('#sign-in').show()
  // $('#sign-up').show()
  $('#sign-out').hide()
  $('.signUp').show()
  $('.signIn').show()
  $('#create-game').hide()
  $('div.text-box').text('')
}

const signOutFailure = () => {
}

const createGameSuccess = (data) => {
  $('#playarea').show()
  $('#get-games').show()
  $('#get-game').show()
  $('img.img-responsive').attr('src', 'https://raw.githubusercontent.com/Anddrew914/TicTacToe/master/assets/images/blank1.png')
  console.log(data)
  store.game = data.game
}

const createGameFailure = () => {
  $('div.text-box').text('Please sign in first.')
}

const updateSuccess = (data) => {
}

const updateFailure = (data) => {
}

const getGamesSuccess = (data) => {
  $('div.text-box').text('you have played ' + (data.games.length + 1) + ' games')
  setTimeout(function () {
    $('div.get-text-box').fadeOut().empty()
  }, 3000)
}

const getGamesFailure = (data) => {
}

const getGameSuccess = (data) => {
  const board = data.game.cells.map(value => {
    if (value === '') {
      return '_'
    }
    return value
  })
  $('div.get-text-box').html('[' + board.slice(0, 3) + ']<br/>[' +
    board.slice(3, 6) + ']<br/>[' + board.slice(6, 9) + ']')
}

const getGameFailure = (data) => {
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  updateSuccess,
  updateFailure,
  createGameSuccess,
  createGameFailure,
  getGamesSuccess,
  getGamesFailure,
  getGameSuccess,
  getGameFailure
}

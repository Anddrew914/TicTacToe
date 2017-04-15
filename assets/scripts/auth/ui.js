'use strict'
const store = require('../store.js')
const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-up').hide()
}

const signUpFailure = (error) => {
  $('div.text-box').text('Error, wrong password?')
  setTimeout(function () {
    $('div.text-box').fadeOut().empty()
  }, 3000)
}

const signInSuccess = (data) => {
  console.log(data)
  store.user = data.user
  // $('#playarea').toggle()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#create-game').show()
  $('.signUp').hide()
  $('.signIn').hide()
  $('.signUp').hide()

}

const signInFailure = (data) => {
  console.log(data)
  $('div.text-box').text('Oops! Did you create a username?')
  setTimeout(function () {
    $('div.text-box').fadeOut().empty()
  }, 3000)
}

const changePasswordSuccess = (data) => {
  $('div.text-box').text('Password changed!')
  setTimeout(function () {
    $('div.text-box').fadeOut().empty()
  }, 3000)
}

const changePasswordFailure = () => {
  $('div.text-box').text('That didn\'t work, try again!')
  setTimeout(function () {
    $('div.text-box').fadeOut().empty()
  }, 3000)
}

const signOutSuccess = (data) => {
  console.log('data is sign', data)
  $('#playarea').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}

const signOutFailure = (error) => {
  console.log(error)
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
  debugger
  console.log(data)
}

const getGameFailure = (data) => {
  console.log('get game failure')
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

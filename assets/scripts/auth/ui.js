'use strict'
const store = require('../store.js')
const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-up').hide()
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
  store.user = data.user
  $('#playarea').toggle()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('data is', data)
}

const changePasswordFailure = (error) => {
  console.log(error)
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
  $('#playarea').toggle()
  store.game = data.game
  console.log(store.game)
  console.log(store.game.id)
}

const createGameFailure = () => {
  console.log('create game failure')
}

const updateSuccess = (data) =>{
  console.log('update data success' + data)
}

const updateFailure = (data) => {
  console.log('update data failure' + data)
}

const getGamesSuccess = (data) => {
  console.log('get games success', data)
}
const getGamesFailure = (data) => {
  console.log('get games failure')
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
  getGamesFailure
}

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
  $('#playarea').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}

const signOutFailure = (error) => {
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

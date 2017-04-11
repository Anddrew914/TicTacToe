'use strict'
const store = require('../store.js')
const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
  store.user = data.user
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
  console.log('data is', data)
}

const signOutFailure = (error) => {
  console.log(error)
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

'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>Account Created!</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Fail</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-home').hide()
  $('#workout-home').show()
  $('form').trigger('reset')
  $('#sign-out').show()
  $('#show-all').show()
  $('#find-modal').show()

  $('#show-workout-form').show()
  $('body').css('background-color', 'rgb(255,192,203,0.7)')
  $('#first').hide()
  $('#second').show()

  console.log(response)
  store.user = response.user

  return true
}

const onSignInFailure = function () {
  $('#sign-display').html('<p>Fail</p>')

  $('form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#sign-display').html('<p>Password Changed Successfully!</p>')

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#sign-display').html('<p>Fail</p>')
}

const onSignOutSuccess = function () {
  console.log('byyeeeee')
  location.reload()
}

export default {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess
}

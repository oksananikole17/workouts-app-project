'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>Account Created!</p>')
  $('#auth-display').addClass('success')

  setTimeout(() => {
    $('#auth-display').html('')
    $('#auth-display').removeClass('success')
  }, 5000)

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
  $('#password').show()

  $('#show-workout-form').show()
  $('body').css('background-color', 'rgb(255,192,203,0.7)')
  $('#first').hide()
  $('#second').show()

  store.user = response.user

  return true
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Sign In Failed</p>')

  $('form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#pass-success').html('Password Changed!')

  $('#pass-success').addClass('success')

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#pass-success').html('Password Change Failed')
}

const onSignOutSuccess = function () {
  $('#auth-home').show()
  $('#workout-home').hide()
  $('#sign-out').hide()
  $('#show-all').hide()
  $('#find-modal').hide()
  $('#password').hide()
  $('#first').show()
  $('#second').hide()
  $('#show-workout-form').hide()
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
